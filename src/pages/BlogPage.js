import { useState } from 'react';
import AnimateIn from '../components/AnimateIn';
import CtaBanner from '../components/sections/CtaBanner';

// cover: typographic cover style (see .cover-* in index.css); first post is the featured issue.
const POSTS = [
  {
    id: 1,
    tag: 'Marketing',
    title: 'How AI Writing Tools Are Changing Content Marketing in 2026',
    excerpt: 'The landscape of content creation has fundamentally shifted. Teams that used to spend weeks on a content calendar now ship in days. Here\'s what every marketer needs to know about the AI-first content era.',
    author: 'Sarah Reeves',
    initials: 'SR',
    date: 'April 5, 2026',
    readTime: '5 min read',
    cover: 'sun',
    coverText: ['Weeks', 'to days.'],
  },
  {
    id: 2,
    tag: 'Product',
    title: 'Brand Voice Lock: Teaching AI to Sound Exactly Like You',
    excerpt: 'Generic AI content is the fastest way to lose your audience. How Voice Lock trains on your best work and produces content that\'s unmistakably yours — every single time.',
    author: 'James Chen',
    initials: 'JC',
    date: 'March 28, 2026',
    readTime: '7 min read',
    cover: 'strike',
    coverText: ['generic', 'yours'],
  },
  {
    id: 3,
    tag: 'Case Study',
    title: 'From 3 Tools to One: Our Customers\' Workflow Transformation',
    excerpt: 'Creative directors, indie founders and content leads who replaced their whole content stack — including the agency that went from 40 hours to 8 a week.',
    author: 'Maya Patel',
    initials: 'MP',
    date: 'March 15, 2026',
    readTime: '4 min read',
    cover: 'stack',
    coverText: ['3', '1'],
  },
  {
    id: 4,
    tag: 'Design',
    title: 'Why We Kept the Red Pen',
    excerpt: 'Every AI edit in Lumina shows up as a tracked change. The story of why we chose an editor\'s margin over a magic button — and what it did for trust.',
    author: 'Ines Okafor',
    initials: 'IO',
    date: 'March 6, 2026',
    readTime: '6 min read',
    cover: 'specimen',
    coverText: ['Aa', 'Instrument Serif'],
  },
  {
    id: 5,
    tag: 'Guide',
    title: 'Writing a Launch Email in Twelve Minutes',
    excerpt: 'A step-by-step walkthrough, from a one-line prompt to a send-ready email — with every revision and the reason behind it.',
    author: 'Rohan Kapoor',
    initials: 'RK',
    date: 'February 22, 2026',
    readTime: '8 min read',
    cover: 'sun',
    coverText: ['12', 'minutes.'],
  },
  {
    id: 6,
    tag: 'Product',
    title: 'Changelog: Voice Lock 2.0 and Shared Brand Libraries',
    excerpt: 'Voice scores per paragraph, one brand library across your whole team, and a calmer suggestions panel. Everything that shipped in February.',
    author: 'Lumina Team',
    initials: 'L',
    date: 'February 14, 2026',
    readTime: '3 min read',
    cover: 'strike',
    coverText: ['v1.9', 'v2.0'],
  },
  {
    id: 7,
    tag: 'Case Study',
    title: 'How Halcyon\'s Editors Learned to Trust a Machine',
    excerpt: 'Ben Walsh\'s content team was the most sceptical customer we\'ve had. Six months later, they review AI drafts faster than their own.',
    author: 'Ben Walsh',
    initials: 'BW',
    date: 'February 2, 2026',
    readTime: '5 min read',
    cover: 'specimen',
    coverText: ['6', 'Months to trust'],
  },
];

const TAGS = ['All', ...new Set(POSTS.map((p) => p.tag))];

function Cover({ post, issue, large = false }) {
  const [a, b] = post.coverText;
  return (
    <div className={`cover cover-${post.cover}${large ? ' cover-lg' : ''}`} aria-hidden="true">
      {post.cover === 'sun' && (
        <>
          <span className="cover-disc" />
          <span className="cover-word">{a}<br /><em>{b}</em></span>
        </>
      )}
      {post.cover === 'strike' && (
        <span className="cover-word"><del>{a}</del><br /><ins>‸ {b}</ins></span>
      )}
      {post.cover === 'stack' && (
        <span className="cover-word cover-ratio">{a}<span className="cover-arrow">→</span>{b}</span>
      )}
      {post.cover === 'specimen' && (
        <>
          <span className="cover-glyph">{a}</span>
          <span className="cover-caption">{b}</span>
        </>
      )}
      <span className="cover-foot">
        <span>No. {String(issue).padStart(2, '0')}</span>
        <span>{post.tag}</span>
      </span>
    </div>
  );
}

function PostMeta({ post }) {
  return (
    <div className="blog-meta">
      <span className="blog-avatar">{post.initials}</span>
      <span className="blog-author">{post.author}</span>
      <span className="blog-meta-dot" />
      <span>{post.date}</span>
      <span className="blog-meta-dot" />
      <span>{post.readTime}</span>
    </div>
  );
}

function BlogCard({ post, index }) {
  return (
    <AnimateIn delay={index % 3}>
      <a href="/blog" className="blog-card" onClick={(e) => e.preventDefault()}>
        <Cover post={post} issue={post.id} />
        <div className="blog-card-body">
          <span className="blog-tag">{post.tag}</span>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <PostMeta post={post} />
        </div>
      </a>
    </AnimateIn>
  );
}

function BlogPage() {
  const [tag, setTag] = useState('All');
  const featured = POSTS[0];
  const showFeatured = tag === 'All';
  const list = showFeatured ? POSTS.slice(1) : POSTS.filter((p) => p.tag === tag);

  return (
    <main>
      {/* PAGE HERO */}
      <section className="journal-hero">
        <div className="container">
          <AnimateIn className="head-split">
            <div>
              <div className="section-label">The Journal</div>
              <h1>Notes from <em>the margins.</em></h1>
            </div>
            <p>
              Essays, guides and changelogs on writing with AI without sounding like it —
              from the people building Lumina and the people using it.
            </p>
          </AnimateIn>

          <div className="journal-filters" role="tablist" aria-label="Filter posts">
            {TAGS.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tag === t}
                className={tag === t ? 'on' : ''}
                onClick={() => setTag(t)}
              >
                {t}
                <span className="count">
                  {t === 'All' ? POSTS.length : POSTS.filter((p) => p.tag === t).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="journal-body">
        <div className="container">
          {showFeatured && (
            <AnimateIn>
              <a href="/blog" className="featured-post" onClick={(e) => e.preventDefault()}>
                <Cover post={featured} issue={featured.id} large />
                <div className="featured-body">
                  <div className="featured-kicker mono">
                    <span className="featured-flag">Featured</span>
                    {featured.tag} · {featured.readTime}
                  </div>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  <div className="featured-foot">
                    <PostMeta post={featured} />
                    <span className="read-link">Read the essay <span className="arrow">→</span></span>
                  </div>
                </div>
              </a>
            </AnimateIn>
          )}

          <div className="journal-list-head">
            <span className="mono">{showFeatured ? 'Latest' : tag}</span>
            <span className="mono">{list.length} {list.length === 1 ? 'post' : 'posts'}</span>
          </div>

          <div className="blog-grid">
            {list.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-section">
        <div className="container">
          <AnimateIn>
            <div className="newsletter">
              <div>
                <div className="section-label">The Sunday Edit</div>
                <h2>One good idea about writing, <em>every Sunday.</em></h2>
              </div>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <label className="form-label" htmlFor="newsletter-email">Email address</label>
                <div className="newsletter-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="you@company.com"
                    className="form-input"
                  />
                  <button type="submit" className="btn-primary">
                    Subscribe <span className="arrow">→</span>
                  </button>
                </div>
                <p className="mono">4,800 readers · Unsubscribe in one click</p>
              </form>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}

export default BlogPage;
