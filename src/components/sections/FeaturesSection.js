import AnimateIn, { useInView } from '../AnimateIn';

export const FEATURES = [
  {
    icon: '✎',
    title: 'Writing Studio',
    desc: 'Blogs, posts, ad copy and product pages from one prompt — structured from formats that already convert across 40+ industries.',
    replaces: ['Docs', 'Jasper'],
  },
  {
    icon: '◐',
    title: 'Design Engine',
    desc: 'On-brand social graphics, banners and decks without opening a design tool. Your kit is applied before you ask.',
    replaces: ['Canva', 'Templates'],
  },
  {
    icon: 'Aa',
    title: 'Voice Lock',
    desc: 'Teach Lumina your tone once. Every draft is scored against it, and anything that sounds off gets flagged in the margin.',
    replaces: ['Style guide PDF'],
  },
  {
    icon: '↻',
    title: 'Pipelines',
    desc: 'Turn one long piece into a week of posts, then schedule and distribute it across channels on autopilot.',
    replaces: ['Buffer', 'Zapier'],
  },
  {
    icon: '↗',
    title: 'Performance',
    desc: 'See what actually moved people. Lumina learns from your best work and writes the next draft with it in mind.',
    replaces: ['Spreadsheets'],
  },
  {
    icon: '⁂',
    title: 'Review',
    desc: 'Comment, suggest and approve in one place, with roles and shared brand assets that keep a whole team in tune.',
    replaces: ['Email threads', 'Slack'],
  },
];

function FeaturesSection() {
  const [listRef, listInView] = useInView(0.05);

  return (
    <section id="features">
      <div className="container">
        <AnimateIn className="head-split">
          <div>
            <div className="section-label">The studio</div>
            <h2>Six tools you pay for separately. <em>Now one.</em></h2>
          </div>
          <p>
            Lumina folds writing, design and distribution into one place — and runs all of it
            through a model of how you actually sound.
          </p>
        </AnimateIn>

        <div ref={listRef} className={`index-list rule-draw${listInView ? ' visible' : ''}`}>
          {FEATURES.map((f, i) => (
            <AnimateIn key={f.title} delay={i % 3} className="index-row">
              <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="index-title">{f.title}</h3>
              <p className="index-desc">{f.desc}</p>
              <span className="index-replaces">
                Replaces<br />
                {f.replaces.map((r, j) => (
                  <span key={r}>{j > 0 && ', '}<s>{r}</s></span>
                ))}
              </span>
              <span className="index-arrow" aria-hidden="true">→</span>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
