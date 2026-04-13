import AnimateIn from '../AnimateIn';

const TESTIMONIALS = [
  {
    initials: 'SR', avatarClass: 'a1',
    text: '"I used to spend half my week writing content. With Lumina, I brief it once and the quality is honestly better than what I\'d write myself. My engagement went up 40% in the first month."',
    name: 'Sarah Reeves', role: 'Brand Designer, Remote',
  },
  {
    initials: 'JC', avatarClass: 'a2',
    text: '"The brand voice feature is what got me. Every piece of content sounds like me. Not some generic AI — it actually matches the tone I\'ve built over 5 years."',
    name: 'James Chen', role: 'Indie Founder, SaaS',
  },
  {
    initials: 'MP', avatarClass: 'a3',
    text: '"We run content for 8 clients. Lumina basically added a third team member. The automation pipelines alone save us 20 hours a week — it\'s insane ROI."',
    name: 'Maya Patel', role: 'Creative Director, Agency',
  },
  {
    initials: 'RK', avatarClass: 'a4',
    text: '"I launched my entire product announcement — email, landing page copy, LinkedIn post — in 45 minutes. Previously that was a 2-day job. Game changer."',
    name: 'Rohan Kapoor', role: 'Product Manager, Startup',
  },
  {
    initials: 'TN', avatarClass: 'a5',
    text: '"The visual design templates are stunning. I have zero design background and I\'m producing assets that look like a professional designer made them. My clients are impressed."',
    name: 'Tanya Novak', role: 'Freelance Marketer',
  },
  {
    initials: 'BW', avatarClass: 'a6',
    text: '"Finally an AI tool that doesn\'t sound robotic. Lumina\'s outputs are nuanced, well-structured, and genuinely useful. We switched from 3 separate tools and haven\'t looked back."',
    name: 'Ben Walsh', role: 'Content Lead, Scale-up',
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="container">
        <AnimateIn>
          <div className="section-head" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', margin: '0 auto 1rem' }}>
              Testimonials
            </div>
            <h2>Loved by designers, marketers &amp; founders</h2>
          </div>
        </AnimateIn>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i % 3} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className={`avatar ${t.avatarClass}`}>{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
