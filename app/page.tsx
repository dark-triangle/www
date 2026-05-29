import Image from "next/image";
import type { ReactElement } from "react";
import styles from "./page.module.css";

type Testimonial = {
  name: string;
  logo: string;
  alt: string;
  width: number;
  height: number;
  highlight: string;
  quote: readonly string[];
  attribution: string;
  companyLink: string;
};

type Outcome = {
  metric: string;
  label: string;
  detail: string;
};

type Capability = {
  eyebrow: string;
  title: string;
  copy: string;
};

type ProcessStep = {
  number: string;
  title: string;
  copy: string;
};

type TrustSignal = {
  title: string;
  copy: string;
};

const outcomes: readonly Outcome[] = [
  {
    metric: "24/7",
    label: "Revenue window",
    detail: "Sell products and capture leads even when the physical store is closed.",
  },
  {
    metric: "SEO + GEO",
    label: "Modern discovery",
    detail:
      "Show up in search engines and in AI-generated answers where customers now start research.",
  },
  {
    metric: "Fast",
    label: "Better first impression",
    detail:
      "Load quickly, work cleanly on mobile, and feel professional before anyone talks to you.",
  },
];

const capabilities: readonly Capability[] = [
  {
    eyebrow: "01",
    title: "Current-era websites",
    copy:
      "We turn outdated pages into sharp, credible experiences that make your business feel active, trustworthy, and worth contacting.",
  },
  {
    eyebrow: "02",
    title: "Performance and accessibility",
    copy:
      "Fast pages, clear navigation, readable content, and mobile-first layouts help more visitors become customers.",
  },
  {
    eyebrow: "03",
    title: "SEO and generative engine optimization",
    copy:
      "We structure content so Google, Bing, ChatGPT, Perplexity, and other answer engines can understand what you sell and who you serve.",
  },
  {
    eyebrow: "04",
    title: "Online inventory and commerce",
    copy:
      "List products, take orders, book appointments, and keep the sales pipeline moving from anywhere.",
  },
];

const processSteps: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Audit what is costing you customers",
    copy:
      "We review your current site, search visibility, mobile experience, speed, content, and conversion paths.",
  },
  {
    number: "02",
    title: "Plan the page that sells",
    copy:
      "We map offers, calls to action, inventory, booking flows, and the content customers need before they buy.",
  },
  {
    number: "03",
    title: "Build fast and polish hard",
    copy:
      "We design, develop, test, and refine the site so it feels modern, loads quickly, and is easy to update.",
  },
  {
    number: "04",
    title: "Launch with a growth foundation",
    copy:
      "We ship with analytics, technical SEO basics, structured content, and a clear next-step roadmap.",
  },
];

const trustSignals: readonly TrustSignal[] = [
  {
    title: "Senior engineering standards",
    copy:
      "Typed code, maintainable systems, accessibility-minded markup, and practical architecture instead of fragile page-builder sludge.",
  },
  {
    title: "Business-first decisions",
    copy:
      "Every section earns its place by helping customers understand, trust, book, buy, or contact you.",
  },
  {
    title: "Modern search readiness",
    copy:
      "We write and structure pages for human readers, classic search crawlers, and AI answer engines.",
  },
];

const testimonials: readonly Testimonial[] = [
  {
    name: "Unit21",
    logo: "/images/unit21-180.png",
    alt: "Unit21 logo",
    width: 180,
    height: 53,
    highlight:
      "Set a high bar for code quality and gave the team durable frontend foundations for a complex app.",
    quote: [
      "Dawson is an incredible leader, mentor and developer. He set up our React app from scratch, using the latest and greatest tools like Typescript and Immutable. The best practices and infrastructure Dawson implemented, like memoizing our selectors and avoiding anonymous, inline functions, has set a high bar of code quality that is required for our ever growing and complex web app. Thanks to Dawson, our app is well setup for years to come.",
      "Dawson is an absolute pleasure to work with and was a great mentor for our team. He accelerated my growth dramatically, helping me grow into a lead frontend engineer in less than a year. His knowledge, communication skills, and eagerness to help buoyed our entire teams performance.",
      "Finally, he lead our most complex features, including a customized timeline graph that required him to manually create the graph with svg. In parting, he left us with tremendous insight on how we can further improve our code quality, reduce load times, and avoid bugs.I am forever grateful I had Dawson as a mentor in starting my engineering career and hope to work with him again in the future. I highly recommend working with Dawson to lead the development of your React app.",
    ],
    attribution: "Tyler Allen, Software Engineer at Unit21",
    companyLink: "https://www.linkedin.com/in/tylertallen/",
  },
  {
    name: "Aether Bio",
    logo: "/images/aether-logo-black.svg",
    alt: "Aether Bio logo",
    width: 300,
    height: 97,
    highlight:
      "Incredibly responsive, detail oriented, and technically skilled from the first day of the engagement.",
    quote: [
      "Dawson was a joy to work with - incredibly responsive, detail oriented, and technically skilled. He went above and beyond for the project we worked on together, and I am very much looking forward to working with him again in the future!",
    ],
    attribution: "Hannah Meyers, CoFounder of Aether Bio",
    companyLink: "https://www.linkedin.com/in/hannah-meyers/",
  },
  {
    name: "Aero",
    logo: "/images/aero-logo.jpg",
    alt: "Aero logo",
    width: 180,
    height: 120,
    highlight:
      "Improved coverage, streamlined tooling, and raised accessibility without sacrificing speed under deadlines.",
    quote: [
      "From day one, Dawson brought a skill set that made him productive immediately and an attitude that was delightful to work with during my time with him at Aero.",
      "Dawson is a product-focused engineer with a strong technical background and an eye for detail. During his time at Aero, he increased the typing and test coverage of the codebase, simplified and streamlined developer tooling, and increased the accessibility of the website.",
      "His code was thoughtful and sustainable even though he was working on tight deadlines.",
    ],
    attribution: "Ben Williams, Software Engineer at Aero",
    companyLink: "https://www.linkedin.com/in/biw/",
  },
];

export default function HomePage(): ReactElement {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.siteHeader}>
          <a href="#top" className={styles.brand}>
            Lost in the Sauce
          </a>
          <nav className={styles.nav} aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#proof">Proof</a>
            <a href="#contact">Book a call</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Modern web development agency</p>
            <h1 className={styles.title}>
              Bring your business into the current era.
            </h1>
            <p className={styles.eyebrow}>
              We design and build fast, polished websites that help customers
              find you, trust you, book you, and buy from you.
            </p>
            <div className={styles.heroActions}>
              <a
                href="https://dawsbot.com/#contact"
                className={styles.primaryButton}
                target="_blank"
                rel="noreferrer"
              >
                Book a free intro call
              </a>
              <a href="#services" className={styles.secondaryButton}>
                See what we build
              </a>
            </div>
          </div>

          <aside className={styles.heroPanel} aria-label="Agency focus areas">
            <p className={styles.panelLabel}>What gets better</p>
            <ul className={styles.checkList}>
              <li>More customers discover you</li>
              <li>More visitors become leads</li>
              <li>Sales and bookings happen after hours</li>
              <li>Your brand looks legit before the first call</li>
            </ul>
          </aside>
        </section>

        <section className={styles.outcomeGrid} aria-label="Customer outcomes">
          {outcomes.map((outcome) => (
            <article key={outcome.label} className={styles.outcomeCard}>
              <p className={styles.outcomeMetric}>{outcome.metric}</p>
              <h2 className={styles.outcomeLabel}>{outcome.label}</h2>
              <p className={styles.outcomeDetail}>{outcome.detail}</p>
            </article>
          ))}
        </section>

        <section className={styles.problemSection}>
          <p className={styles.kicker}>Sound familiar?</p>
          <div className={styles.splitSection}>
            <h2 className={styles.sectionTitle}>
              Your site should not be a dusty brochure.
            </h2>
            <div className={styles.problemCopy}>
              <p>
                If your website looks old, loads slow, hides your products, or
                makes people call during business hours for basic information,
                it is probably costing you customers.
              </p>
              <p>
                We turn it into a practical sales asset: professional design,
                clear offers, findable content, booking paths, product listings,
                and a technical foundation built for the next wave of search.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>What we build</p>
            <h2 className={styles.sectionTitle}>
              Websites that make the business look alive.
            </h2>
            <p className={styles.sectionIntro}>
              We focus on the work that changes customer behavior: trust,
              speed, discovery, conversion, and the ability to buy or book
              without waiting for someone to answer the phone.
            </p>
          </div>

          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <article key={capability.title} className={styles.capabilityCard}>
                <p className={styles.cardEyebrow}>{capability.eyebrow}</p>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className={styles.processSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>The process</p>
            <h2 className={styles.sectionTitle}>Clear. Practical. Shipped.</h2>
            <p className={styles.sectionIntro}>
              No theater, no six-month mystery project. We find the business
              goal, build the right web system, and launch with the basics
              handled correctly.
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <article key={step.number} className={styles.processCard}>
                <p className={styles.processNumber}>{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Why clients trust the work</p>
            <h2 className={styles.sectionTitle}>
              Agency polish, senior-engineer discipline.
            </h2>
          </div>

          <div className={styles.trustGrid}>
            {trustSignals.map((signal) => (
              <article key={signal.title} className={styles.trustCard}>
                <h3>{signal.title}</h3>
                <p>{signal.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Client Results</h2>
            <p className={styles.sectionIntro}>
              We help teams ship cleaner products, sharper interfaces, and more
              dependable web experiences.
            </p>
          </div>

          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className={styles.clientCard}>
              <a
                href={testimonial.companyLink}
                target="_blank"
                rel="noreferrer"
                className={styles.logoLink}
                aria-label={`Visit ${testimonial.name} testimonial source on LinkedIn`}
              >
                <Image
                  src={testimonial.logo}
                  alt={testimonial.alt}
                  width={testimonial.width}
                  height={testimonial.height}
                  className={styles.clientLogo}
                />
              </a>

              <div className={styles.testimonialBody}>
                <p className={styles.quoteHighlight}>
                  &ldquo;{testimonial.highlight}&rdquo;
                </p>

                <details className={styles.quoteDetails}>
                  <summary className={styles.quoteToggle}>
                    Read full testimonial
                  </summary>
                  <blockquote className={styles.quote}>
                    {testimonial.quote.map((paragraph, index) => (
                      <p key={`${testimonial.name}-${index}`}>{paragraph}</p>
                    ))}
                    <footer className={styles.attribution}>
                      {testimonial.attribution}
                    </footer>
                  </blockquote>
                </details>
              </div>
            </article>
          ))}
        </section>

        <section id="contact" className={styles.ctaSection}>
          <p className={styles.kicker}>Book a call</p>
          <h2 className={styles.ctaTitle}>
            Let&apos;s turn your website into a better salesperson.
          </h2>
          <p className={styles.ctaCopy}>
            Bring the current site, the business goal, and what you sell. We
            will tell you where the biggest lift is likely hiding.
          </p>
          <p className={styles.cta}>
            <a
              href="https://dawsbot.com/#contact"
              className={styles.primaryButton}
              target="_blank"
              rel="noreferrer"
            >
              Book your free intro call
            </a>
          </p>
        </section>

        <footer className={styles.footer}>
          <span>Lost in the Sauce</span>
          <span>Copyright {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  );
}
