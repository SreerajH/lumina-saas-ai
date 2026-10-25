import AnimateIn from '../AnimateIn';

export const FAQS = [
  {
    q: 'Is Lumina really free to start?',
    a: 'Yes — no credit card needed. The free plan includes 50 AI generations per month and 3 active projects. You can upgrade whenever you need more.',
  },
  {
    q: 'How is Lumina different from ChatGPT or Jasper?',
    a: "Lumina combines writing, visual design, and automation in one tool, with a Brand Voice Lock feature that learns your specific tone. It's purpose-built for creators, not general use.",
  },
  {
    q: 'Can I use Lumina for client work?',
    a: 'Absolutely. Many agencies use Lumina to manage content for multiple clients. The Team plan lets you create separate brand profiles for each client with shared team access.',
  },
  {
    q: 'What integrations does Lumina support?',
    a: "Lumina connects with WordPress, Webflow, LinkedIn, Instagram, Notion, Slack, and more. We're adding new integrations every month based on user requests.",
  },
  {
    q: 'Is my content and brand data private?',
    a: "Yes. Your content and brand data is never used to train our models or shared with third parties. You own everything you create — always.",
  },
  {
    q: 'Can I cancel or change plans anytime?',
    a: "Yes, you can upgrade, downgrade, or cancel at any time. If you cancel, you keep access until the end of your billing period, then move to the free plan automatically.",
  },
];

function FaqSection() {
  return (
    <section id="faq">
      <div className="container">
        <div className="faq-layout">
          <AnimateIn className="faq-aside">
            <div className="section-label">FAQ</div>
            <h2>Fair <em>questions.</em></h2>
            <p>
              Something we didn't cover? Write to <a href="/contact">hello@lumina.ai</a> — a
              human replies, usually within four hours.
            </p>
          </AnimateIn>

          <AnimateIn className="faq-list">
            {FAQS.map((item, i) => (
              <details key={item.q} className="faq-item" open={i === 0}>
                <summary>
                  {item.q}
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-a">{item.a}</div>
              </details>
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
