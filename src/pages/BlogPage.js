import AnimateIn from '../components/AnimateIn';
import CtaBanner from '../components/sections/CtaBanner';

const POSTS = [
  {
    id: 1,
    tag: 'Marketing',
    title: 'How AI Writing Tools Are Changing Content Marketing in 2026',
    excerpt: 'The landscape of content creation has fundamentally shifted. Teams that used to spend weeks on a content calendar now ship in days. Here\'s what every marketer needs to know about the AI-first content era.',
    author: 'Sarah Reeves',
    date: 'April 5, 2026',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, rgba(124,111,255,0.3) 0%, rgba(192,132,252,0.2) 100%)',
    icon: '✦',
  },
  {
    id: 2,
    tag: 'Product',
    title: 'Brand Voice Lock: Teaching AI to Sound Exactly Like You',
    excerpt: 'Generic AI content is the fastest way to lose your audience. We explain how Lumina\'s Brand Voice Lock feature trains on your best work and produces content that\'s unmistakably yours — every single time.',
    author: 'James Chen',
    date: 'March 28, 2026',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.25) 0%, rgba(124,111,255,0.2) 100%)',
    icon: '⟡',
  },
  {
    id: 3,
    tag: 'Case Study',
    title: 'From 3 Tools to One: Our Customers\' Workflow Transformation',
    excerpt: 'Real stories from creative directors, indie founders, and content leads who replaced their entire content stack with Lumina. Including the one agency that went from 40 hours to 8 hours a week on content.',
    author: 'Maya Patel',
    date: 'March 15, 2026',
    readTime: '4 min read',
    gradient: 'linear-gradient(135deg, rgba(192,132,252,0.25) 0%, rgba(245,158,11,0.15) 100%)',
    icon: '◎',
  },
];

function BlogCard({ post, index }) {
  return (
    <AnimateIn delay={index}>
      <div className="blog-card">
        {/* Image placeholder */}
        <div className="blog-card-img" style={{ background: post.gradient }}>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '3rem', opacity: 0.6,
          }}>
            {post.icon}
          </div>
        </div>

        <div className="blog-card-body">
          <span className="blog-tag">{post.tag}</span>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <div className="blog-meta">
            <span>{post.author}</span>
            <span className="blog-meta-dot" />
            <span>{post.date}</span>
            <span className="blog-meta-dot" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}

function BlogPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimateIn>
            <div className="section-label" style={{ justifyContent: 'center', margin: '0 auto 1rem' }}>
              Blog
            </div>
            <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.2rem, 5vw, 4rem)', maxWidth: '700px', margin: '0 auto 1rem' }}>
              Insights for<br />
              <span className="gradient-text">modern creators</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto', textAlign: 'center', fontWeight: 300 }}>
              Strategies, product updates, and real stories from the Lumina community.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* POSTS GRID */}
      <section style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Featured post */}
          <AnimateIn>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 0,
              marginBottom: '3rem',
              transition: 'border-color 0.3s',
            }}
              className="blog-card"
            >
              <div style={{
                background: POSTS[0].gradient,
                minHeight: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem',
                opacity: 0.7,
              }}>
                {POSTS[0].icon}
              </div>
              <div style={{ padding: '3rem' }}>
                <span className="blog-tag">Featured · {POSTS[0].tag}</span>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', margin: '1rem 0 0.75rem', lineHeight: 1.3 }}>
                  {POSTS[0].title}
                </h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 300 }}>
                  {POSTS[0].excerpt}
                </p>
                <div className="blog-meta">
                  <span>{POSTS[0].author}</span>
                  <span className="blog-meta-dot" />
                  <span>{POSTS[0].date}</span>
                  <span className="blog-meta-dot" />
                  <span>{POSTS[0].readTime}</span>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Regular posts grid */}
          <div className="blog-grid">
            {POSTS.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <AnimateIn>
            <div className="cta-box" style={{ padding: '3.5rem' }}>
              <div className="section-label" style={{ justifyContent: 'center', margin: '0 auto 1rem' }}>Newsletter</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', maxWidth: '400px' }}>
                Get new posts in your inbox
              </h2>
              <p>Weekly insights on AI content, design, and creative workflow. No spam — ever.</p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', maxWidth: '420px', margin: '0 auto', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="form-input"
                  style={{ flex: 1, minWidth: '200px', margin: 0 }}
                />
                <button className="btn-primary" style={{ borderRadius: '10px', padding: '0.8rem 1.5rem' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}

export default BlogPage;
