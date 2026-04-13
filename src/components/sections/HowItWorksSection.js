import AnimateIn from '../AnimateIn';

const STEPS = [
  {
    num: '01',
    title: 'Set up your brand',
    desc: 'Upload your logo, colours, and a few examples of your content. Lumina builds your unique voice profile in under 2 minutes.',
  },
  {
    num: '02',
    title: 'Describe what you need',
    desc: 'Type a simple prompt — "write a product launch email for designers" — and Lumina handles the rest, from structure to CTA.',
  },
  {
    num: '03',
    title: 'Refine with one click',
    desc: 'Adjust tone, length, audience, and format instantly. The AI explains every suggestion so you stay in control.',
  },
  {
    num: '04',
    title: 'Publish or export',
    desc: 'Push directly to your CMS, social platforms, or download as a design file. Lumina integrates with the tools you already use.',
  },
];

function HowItWorksSection() {
  return (
    <section id="how">
      <div className="container">
        <AnimateIn>
          <div className="section-head" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', margin: '0 auto 1rem' }}>
              How it works
            </div>
            <h2>From blank page to finished content in minutes</h2>
          </div>
        </AnimateIn>

        <div className="steps-layout">
          <div className="steps-list">
            {STEPS.map((step, i) => (
              <AnimateIn key={step.num} delay={i}>
                <div className="step">
                  <div className="step-num">{step.num}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={2}>
            <div className="steps-visual">
              <div className="chat-bubble user">
                Write a product launch email for our new AI design tool. Audience: freelance designers.
              </div>
              <div className="chat-bubble ai">
                <span className="ai-tag">✦ Lumina AI</span>
                Subject: "The design tool you've been waiting for is here"<br /><br />
                Hey [Name], if you've ever spent 2 hours making something look 'good enough' instead of great — this is for you...
              </div>
              <div className="chat-bubble user">
                Make it shorter and punchier. Add urgency.
              </div>
              <div className="chat-bubble ai">
                <span className="ai-tag">✦ Lumina AI — Updated</span>
                Subject: "Stop settling. Ship better design today."<br /><br />
                Launch week ends Friday. Get lifetime early access before 50,000 designers do.
                <div className="chat-progress">
                  <div className="progress-bar" />
                  <div className="progress-bar" />
                  <div className="progress-bar half" />
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
