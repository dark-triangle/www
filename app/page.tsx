import Image from "next/image";
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

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <p className={styles.kicker}>
            Modern web development for ambitious teams
          </p>
          <h1 className={styles.title}>Lost in the Sauce</h1>
          <p className={styles.eyebrow}>
            We design and build fast, modern websites and web applications that
            are easy to use, easy to maintain, and ready to grow.
          </p>
          <p className={`${styles.subHeader} ${styles.highlight}`}>
            Strategy, product-minded engineering, frontend systems, performance,
            accessibility, and polished launch-ready execution.
          </p>
        </section>

        <section className={styles.section}>
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
                aria-label={`Visit ${testimonial.name} on LinkedIn`}
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

          <p className={styles.outreach}>
            Let&apos;s make your next release feel inevitable.
          </p>
          <p className={styles.cta}>
            <a
              href="https://dawsbot.com/#contact"
              className={styles.highlight}
              target="_blank"
              rel="noreferrer"
            >
              Click here for a free intro call
            </a>
          </p>
        </section>

        <footer className={styles.footer}>
          Copyright {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}
