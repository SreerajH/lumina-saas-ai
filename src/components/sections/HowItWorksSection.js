import AnimateIn from '../AnimateIn';

const STEPS = [
  {
    num: '01',
    title: 'Show it your best work',
    desc: 'Drop in your logo, colours and a handful of pieces you are proud of. Your voice profile is ready in about two minutes.',
  },
  {
    num: '02',
    title: 'Ask in plain words',
    desc: '"A launch email for freelance designers." Lumina handles structure, hook and call to action.',
  },
  {
    num: '03',
    title: 'Edit like an editor',
    desc: 'Every change shows up as a tracked edit with a reason. Accept, skip, or push back — you stay in charge.',
  },
  {
    num: '04',
    title: 'Ship it anywhere',
    desc: 'Publish to your CMS and socials, or export the design files. It plugs into the tools you already use.',
  },
];

function HowItWorksSection() {
  return (
    <section id="how" className="how-section">
      <div className="container">
        <AnimateIn className="head-split">
          <div>
            <div className="section-label">How it works</div>
            <h2>A blank page to a finished draft, <em>with receipts.</em></h2>
          </div>
          <p>
            No black box. Lumina edits the way a good editor does — in the margins, with every
            change visible and reversible.
          </p>
        </AnimateIn>

        <div className="steps-row">
          {STEPS.map((step, i) => (
            <AnimateIn key={step.num} delay={i} className="step-col">
              <div className="step-num"><span>{step.num}</span></div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <div className="revisions">
            <div className="rev">
              <div className="rev-head">
                <span className="rev-tag"><b>Draft 1</b> · 09:41</span>
                <span className="prompt-pill">Launch email, freelance designers</span>
              </div>
              <div className="rev-subject">The design tool you've been waiting for is here</div>
              <p>
                Hey Sam — if you've ever spent two hours making something look "good enough"
                instead of great, this one is for you. We've been working hard on a brand-new way
                to create assets faster…
              </p>
              <div className="rev-foot"><span>142 words</span><span>Voice 71%</span></div>
            </div>

            <div className="rev">
              <div className="rev-head">
                <span className="rev-tag"><b>Draft 2</b> · 09:42</span>
                <span className="prompt-pill">Shorter. Add urgency.</span>
              </div>
              <div className="rev-subject">
                <del>The design tool you've been waiting for is here</del>{' '}
                <ins>Stop settling. Ship better work this week.</ins>
              </div>
              <p>
                Hey Sam — <del>if you've ever spent two hours making something look "good enough"
                instead of great, this one is for you.</del>{' '}
                <ins>launch week ends Friday.</ins> Get lifetime early access before the next
                50,000 designers do.
              </p>
              <div className="rev-foot"><span>38 words</span><span className="up">Voice 96% ↑</span></div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export default HowItWorksSection;
