require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

// ─── Supabase ─────────────────────────────────────────────────
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// ─── Middleware ───────────────────────────────────────────────
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3001'] }));
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────

// POST /api/waitlist
app.post('/api/waitlist', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const { error } = await supabase
    .from('waitlist')
    .insert({ email });

  if (error) {
    if (error.code === '23505') {
      // unique_violation — email already exists
      return res.status(409).json({ error: 'This email is already on the waitlist.' });
    }
    console.error('[waitlist] Supabase error:', error.message);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }

  console.log(`[waitlist] New signup: ${email}`);
  res.status(201).json({ message: "You're on the list! We'll be in touch soon." });
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (!email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const { error } = await supabase
    .from('contacts')
    .insert({ name, email, message });

  if (error) {
    console.error('[contact] Supabase error:', error.message);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }

  console.log(`[contact] New message from: ${name} <${email}>`);
  res.status(201).json({ message: "Thanks for reaching out! We'll get back to you within 24 hours." });
});

// GET /api/stats
app.get('/api/stats', (req, res) => {
  res.json({
    users: 12000,
    generations: 2400000,
    speedMultiplier: 10,
    satisfaction: 98,
  });
});

// ─── Start ────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Lumina API server running at http://localhost:${PORT}`);
});
