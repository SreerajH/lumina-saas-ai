# Lumina AI — SaaS Landing Page
## Design Brief + Pattern Analysis

---

## Part A — Pattern Analysis (From Behance Research)

### Top Projects Studied
- **Craftly** — AI Website & SaaS UX UI Design (2,929 appreciations, Apr 2026)
- **ConverzAI** — AI Smart Video Conferencing SaaS Platform (336 appreciations, Oct 2025)
- **Axion** — AI-powered Automation Platform UX/UI (103 appreciations, Jan 2026)
- **Task Management Platform** by Fahema Yesmin (459 appreciations)

---

### What All Top-Performing AI SaaS Designs Have in Common

#### 1. Color System — Dark backgrounds dominate
- **90% use dark themes** (#05050A to #0D0D14 range)
- Accent colors are almost always purple/violet (#7C6FFF range) or blue-violet gradients
- Secondary accents: teal (#38BDF8), pink-purple (#C084FC)
- White text on dark = high contrast, premium feel
- **Avoid**: purple-on-white (generic, overused)
- Subtle noise/grain overlay on backgrounds adds depth and premium feel

#### 2. Typography — Display font + clean body
- **Header fonts**: Syne, Clash Display, General Sans, Satoshi — geometric, high-weight
- **Body fonts**: DM Sans, Plus Jakarta Sans, DM Mono for code elements
- Heading font-weight is 700–800 always
- Letter-spacing on headings: -0.02em to -0.04em (tight = modern)
- ALL top projects use a two-font system, never a single font

#### 3. Hero Section — What converts
- **Hero badge** (small pill above headline): signals social proof + status ("Now in beta", "12,000+ users")
- **Headline structure**: Action verb + Outcome + AI differentiator (max 8–10 words)
- **Subheadline**: 1–2 sentences, addresses pain point directly, under 25 words
- **Two CTAs**: primary (filled, bold), secondary (ghost/outline) — never just one
- **Product mockup** below the fold: all top projects show a real UI screenshot or illustrated dashboard — this is the #1 differentiator between good and great portfolios
- Soft glow/radial gradient behind mockup for depth

#### 4. Section Structure — The winning order
1. Nav
2. Hero (headline + CTA + mockup)
3. Social proof logos strip (trusted by...)
4. Features grid (6 features, 2–3 columns)
5. How it works (step-by-step, with visual)
6. Stats/numbers bar
7. Testimonials grid
8. Pricing (3 tiers)
9. FAQ
10. CTA banner (repeat the main CTA)
11. Footer

This exact order is used by Linear, Vercel, Notion, and all top Behance SaaS projects for a reason — it mirrors the user's decision journey.

#### 5. Components That Signal Quality

**Feature cards:**
- Grid layout with subtle dividers between cards
- Top-border highlight on hover (1px gradient line)
- Icon: simple geometric symbol (not emoji, not complex illustration)
- Card title: 2–4 words max
- Card body: 2–3 lines, benefit-focused (not feature-focused)

**Pricing cards:**
- Always 3 tiers (Starter/Free, Pro, Team or Business)
- Middle tier = "Most Popular" badge
- Price displayed large (3rem+), font-weight 800
- Feature list with checkmarks — inactive features visually dimmed (not hidden)
- Annual/monthly toggle = professional UX signal

**Testimonials:**
- 6 cards in 3×2 grid
- Stars always visible (social proof signal)
- Quote first, attribution second
- Avatar initials with gradient backgrounds (when no real photos)
- Author name + role/company = specificity = trust

**Nav:**
- Fixed, blur backdrop
- Logo left, links center, CTA right
- Ghost "Sign in" + filled "Start free" pair
- Becomes more opaque on scroll (JS scroll effect)

#### 6. Motion & Animation — What Behance reviewers notice
- **Fade-up on scroll** for section content (IntersectionObserver)
- **Staggered reveal** for feature cards (delay each by 100ms)
- **Cursor blink** in the mockup editor feels authentic
- **Hover states** on all interactive elements (cards, buttons, nav links)
- Nav transition on scroll (opacity change)
- Avoid: heavy page load animations, parallax for portfolio (too heavy to code)

#### 7. Mockup/UI Preview Section — Portfolio gold
- This is the highest-effort, highest-reward part
- Shows a "browser frame" with window controls (red/yellow/green dots)
- Contains a simplified but realistic version of the product UI
- Sidebar + main content layout = dashboard feel
- Adds glow/shadow below the frame

---

## Part B — Lumina AI Design Decisions

### Product Definition
**Name:** Lumina
**Tagline:** Write. Design. Ship. With AI that thinks.
**Category:** AI Writing + Visual Design + Workflow Automation SaaS
**Target users:** Freelance designers, content creators, indie founders, small marketing teams

### Why this product concept works for portfolio
- It covers 3 use cases (writing, design, automation) = shows range
- The mockup can show a realistic AI writing studio UI
- Pricing has justifiable tiers
- Testimonials can be specific and believable
- Broad enough to apply to multiple industries = shows strategic thinking

---

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#050508` | Page background |
| `--surface` | `#0d0d14` | Cards, nav |
| `--surface2` | `#13131e` | Nested elements |
| `--border` | `rgba(255,255,255,0.07)` | Default borders |
| `--border2` | `rgba(255,255,255,0.12)` | Hover borders |
| `--text` | `#f0f0f8` | Primary text |
| `--muted` | `#7a7a9a` | Secondary text, labels |
| `--accent` | `#7c6fff` | Primary CTA, links, icons |
| `--accent2` | `#c084fc` | Gradient end, highlights |
| `--accent3` | `#38bdf8` | Info accents, code highlights |

### Typography Scale

| Role | Font | Size | Weight |
|---|---|---|---|
| Display H1 | Syne | clamp(2.8rem, 6vw, 5.2rem) | 800 |
| Section H2 | Syne | clamp(2rem, 4vw, 3.2rem) | 700 |
| Card H3 | Syne | 1.25rem | 600 |
| Body | DM Sans | 1rem | 300–400 |
| Label | DM Sans | 0.78rem | 500 |
| Caption | DM Sans | 0.85rem | 300 |

---

### Section-by-Section Copy

#### Nav
- Logo: **Lumina** (gradient text)
- Links: Features · How it works · Pricing · FAQ
- CTA: Sign in (ghost) + **Start free →** (filled)

#### Hero
- Badge: `✦ Now in public beta — join 12,000+ creators`
- H1: `Write. Design. Ship. With AI that thinks.`
- Sub: `Lumina combines AI writing, visual design, and workflow automation in one seamless studio. From first draft to finished product — 10× faster.`
- CTA1: `Start for free — no card needed`
- CTA2: `See how it works ↓`
- Note: `Free plan includes 3 projects · No credit card required · Cancel anytime`

#### Social Proof Strip
- Label: `Trusted by teams at`
- Logos: Notion · Figma · Linear · Vercel · Stripe · Loom · Webflow

#### Features (6 cards)
1. **AI Writing Studio** — Generate blogs, social posts, ad copy, and product descriptions with a single prompt.
2. **Visual Design Engine** — Create on-brand graphics, social banners, and presentations without design experience.
3. **Brand Voice Lock** — Train Lumina on your tone and style guidelines once. Every piece of content will match your brand.
4. **Workflow Automation** — Build content pipelines that run on autopilot. Schedule, repurpose, and distribute.
5. **Performance Analytics** — See which content drives results. Lumina learns from your best-performing work.
6. **Team Collaboration** — Comment, review, and approve content in real-time with role-based permissions.

#### How It Works (4 steps)
1. **Set up your brand** — Upload logo, colours, and examples. Lumina builds your voice profile in 2 minutes.
2. **Describe what you need** — Type a simple prompt and Lumina handles structure, tone, and CTA.
3. **Refine with one click** — Adjust tone, length, audience, and format instantly.
4. **Publish or export** — Push to CMS, social platforms, or download as a design file.

#### Stats
- `12k+` Active creators
- `2.4M` Content pieces generated
- `10×` Faster than traditional tools
- `98%` Customer satisfaction

#### Testimonials (6 people)
- Sarah Reeves — Brand Designer — engagement up 40%
- James Chen — Indie Founder — brand voice accuracy
- Maya Patel — Creative Director — saves 20 hrs/week
- Rohan Kapoor — Product Manager — launched full campaign in 45 min
- Tanya Novak — Freelance Marketer — professional design without design skills
- Ben Walsh — Content Lead — replaced 3 tools

#### Pricing (3 tiers)
| | Starter | Pro | Team |
|---|---|---|---|
| Price | $0 | $29/mo (annual) | $79/mo |
| Projects | 3 | Unlimited | Unlimited |
| AI Generations | 50/mo | 1,000/mo | Unlimited |
| Brand Voice Lock | ✗ | ✓ | ✓ |
| Automation | ✗ | 5 workflows | Unlimited |
| Seats | 1 | 1 | 5 |
| CTA | Get started free | Start Pro free — 14 days | Start Team free |

#### FAQ (6 questions)
1. Is Lumina really free to start?
2. How is Lumina different from ChatGPT or Jasper?
3. Can I use Lumina for client work?
4. What integrations does Lumina support?
5. Is my content and brand data private?
6. Can I cancel or change plans anytime?

#### CTA Banner
- H2: `Ready to create 10× faster?`
- Body: `Join 12,000+ creators who've made Lumina their creative HQ. Start for free — no card required.`
- CTA: `Get started free →` + `See pricing`

---

### What to Design in Figma (Screens)
When building this as a Figma case study, design these frames:

1. **Landing page — full desktop** (1440px width)
2. **Landing page — mobile** (390px width)
3. **Hero section close-up** — showcase the mockup quality
4. **Pricing section close-up** — show the 3-tier card detail
5. **App dashboard mockup** — the product UI visible in the hero
6. **Component sheet** — buttons, cards, badges, feature icons

This gives you 5–6 Behance slides minimum, which is the standard for a strong case study.

---

### Figma Implementation Notes

**Auto-layout everything** — Use auto-layout for:
- Feature cards grid
- Testimonial cards
- Pricing cards
- Nav links
- Footer columns

**Reusable components to build:**
- `Button/Primary` (with hover variant)
- `Button/Ghost` (with hover variant)
- `Badge/Label` (gradient pill)
- `FeatureCard` (with icon slot)
- `TestimonialCard`
- `PricingCard` (with featured variant)
- `Avatar` (with color variants A1–A6)
- `SectionLabel` (with line)
- `NavLink` (with hover state)

**Design tokens to set up as Figma variables:**
- Color tokens (all --var values above)
- Typography styles (all 6 rows in table above)
- Spacing: 4px base grid (8, 12, 16, 24, 32, 48, 64, 80, 96, 128)
- Border radius: 8px (small), 12px (medium), 20px (large), 100px (pill)

---

### What Makes This Portfolio-Ready

1. **Real product concept** — not just a UI exercise, it's a believable SaaS product
2. **All major landing page patterns included** — shows you understand conversion-focused web design
3. **Dark + purple/violet aesthetic** — this is the dominant AI SaaS design language in 2025–2026
4. **Mockup in the hero** — the hardest part to design, and the first thing reviewers notice
5. **Pricing section with logic** — shows business thinking, not just visual thinking
6. **Consistent design system** — tokens, components, spacing all follow a clear system

---

*Design file: Lumina AI Landing Page*
*Tool: Figma (recommended: 1440px desktop + 390px mobile)*
*References: Craftly, ConverzAI, Axion on Behance (2025–2026)*
*Created for portfolio purposes*
