import AnimateIn from '../AnimateIn';

// First entry is rendered as the lead pull-quote.
const TESTIMONIALS = [
  {
    initials: 'MP', avatarClass: 'a1', metric: '20 hrs / week back',
    text: 'We run content for eight clients. Lumina is basically the third person on the team — and the only one who never forgets a client\'s tone.',
    name: 'Maya Patel', role: 'Creative Director, Marlow & Co',
  },
  {
    initials: 'JC', avatarClass: 'a2', metric: 'Voice match 97%',
    text: 'Every piece sounds like me. Not generic AI — the tone I spent five years building.',
    name: 'James Chen', role: 'Founder, Fieldnotes',
  },
  {
    initials: 'SR', avatarClass: 'a3', metric: '+40% engagement',
    text: 'I brief it once and the draft is better than what I\'d have written on a Tuesday afternoon.',
    name: 'Sarah Reeves', role: 'Brand Designer',
  },
  {
    initials: 'RK', avatarClass: 'a4', metric: '2 days → 45 min',
    text: 'Launch email, landing copy and the LinkedIn post, done before lunch. That used to be my whole week.',
    name: 'Rohan Kapoor', role: 'PM, Orbit',
  },
  {
    initials: 'TN', avatarClass: 'a5', metric: 'Zero design background',
    text: 'Clients assume I hired a designer. I didn\'t. The templates just respect my brand kit.',
    name: 'Tanya Novak', role: 'Freelance Marketer',
  },
  {
    initials: 'BW', avatarClass: 'a6', metric: '3 tools cancelled',
    text: 'The tracked edits sold our editors. They can see exactly what changed and why.',
    name: 'Ben Walsh', role: 'Content Lead, Halcyon',
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="container">
        <AnimateIn className="head-split">
          <div>
            <div className="section-label">From the margins</div>
            <h2>People who write for a living, <em>on the record.</em></h2>
          </div>
          <p>Designers, marketers and founders who swapped a stack of tabs for one studio.</p>
        </AnimateIn>

        <div className="quotes-grid">
          {TESTIMONIALS.map((t, i) => (
            <AnimateIn key={t.name} delay={i % 3} className={`quote${i === 0 ? ' lead' : ''}`}>
              <div>
                <span className="quote-metric">{t.metric}</span>
                <p className="quote-text">{t.text}</p>
              </div>
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
