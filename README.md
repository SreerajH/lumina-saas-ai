# Lumina AI — SaaS Landing Page

A production-ready React + Tailwind CSS landing page for **Lumina**, an AI writing, design, and workflow automation SaaS. Built with a full Node.js/Express API backend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router v6, Tailwind CSS v3 |
| Build tool | Create React App + CRACO |
| Backend | Node.js + Express |
| Database | Supabase (PostgreSQL) |
| Fonts | Syne (display) + DM Sans (body) via Google Fonts |

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable | Where to find it |
|---|---|
| `REACT_APP_SUPABASE_URL` | Supabase dashboard → Project Settings → API → Project URL |
| `REACT_APP_SUPABASE_ANON_KEY` | Supabase dashboard → Project Settings → API → `anon` / `public` key |
| `SUPABASE_URL` | Same as above |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase dashboard → Project Settings → API → `service_role` key (keep secret) |

### 3. Create Supabase tables

Run the following SQL in the Supabase SQL editor (**Dashboard → SQL Editor**):

```sql
-- Waitlist signups
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Contact form submissions
create table contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);
```

### 4. Start the frontend

```bash
npm start
```

Opens at **http://localhost:3000**

### 5. Start the backend (separate terminal)

```bash
node server.js
```

Runs at **http://localhost:3001**

---

## Pages

| Route | Page |
|---|---|
| `/` | Landing page (full 9-section homepage) |
| `/features` | Expanded features by category |
| `/pricing` | Pricing cards + comparison table + FAQ |
| `/blog` | Blog listing with 3 sample posts |
| `/login` | Login form |
| `/signup` | Signup form (→ POST /api/waitlist) |
| `/contact` | Contact form (→ POST /api/contact) |

---

## API Endpoints

| Method | Endpoint | Body | Description |
|---|---|---|---|
| `POST` | `/api/waitlist` | `{ email }` | Inserts into `waitlist` table in Supabase |
| `POST` | `/api/contact` | `{ name, email, message }` | Inserts into `contacts` table in Supabase |
| `GET` | `/api/stats` | — | Returns platform stats |

---

## Design System

All tokens are CSS custom properties in `src/index.css`:

- `--bg: #050508` — page background
- `--accent: #7c6fff` — primary CTA, links
- `--accent2: #c084fc` — gradient highlights
- `--text: #f0f0f8` — primary text
- `--muted: #7a7a9a` — secondary text

Also registered in `tailwind.config.js` as `lm-*` color utilities.

---

## Production Build

```bash
npm run build
```
