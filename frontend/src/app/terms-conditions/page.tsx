import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";
import styles from "./terms.module.css";

export const metadata = { title: "Terms & Conditions | Vastora Tech" };

const lastUpdated = "November 18, 2025";

const serviceList = [
  "Website development",
  "App development",
  "Branding and identity",
  "UI/UX design",
  "Digital marketing",
  "SEO and growth consulting",
  "Tech & IT enablement",
];

const paymentNotes = [
  "Milestone payments follow the schedule outlined in your proposal",
  "Discovery or production work begins after the initial payment clears",
  "Advance amounts are non-refundable once work has started",
  "New features or major revisions outside scope may require change orders",
];

const ipNotes = [
  "All strategy, code, designs, and deliverables remain Vastora Tech property until invoices are paid in full",
  "Transfer of ownership is granted after completion and settlement when explicitly agreed",
  "You may not reproduce, redistribute, or resell our work without written permission",
];

const thirdPartyNotes = [
  "Bugs, downtime, or pricing changes introduced by third-party vendors",
  "Access or rate limits applied by APIs or SaaS partners",
  "License fees for premium plugins or software required for your project",
];

const liabilityNotes = [
  "Indirect damages such as revenue loss, opportunity cost, or reputational impact",
  "Technical issues tied to hosting providers, DNS, or client-managed infrastructure",
  "Delays caused by late approvals, missing assets, or dependencies outside our control",
  "Limit of liability is capped at the amount paid for the specific service",
];

const clientResponsibilities = [
  "Share accurate business information, assets, and credentials",
  "Respond in a timely manner to reviews and approvals",
  "Use the website and our services ethically and lawfully",
  "Safeguard any credentials we provide and notify us of unauthorized access",
];

const terminationNotes = [
  "Invoices remain unpaid beyond the agreed timeline",
  "Policies or acceptable use guidelines are violated",
  "Abusive, fraudulent, or illegal activity is detected",
];

const TermsConditions = () => {
  return (
    <>
      <HeaderFive />
      <main className={styles.termsMain}>
        <section className={styles.heroSection}>
          <div className="container">
            <p className={styles.heroEyebrow}>Terms &amp; Conditions</p>
            <h1 className={styles.heroTitle}>Vastora Tech Terms</h1>
            <p className={styles.heroLead}>
              These Terms &amp; Conditions govern the vastoratech.com website and the professional services
              delivered by Vastora Tech. Please review them carefully before engaging with our team.
            </p>
            <p className={styles.heroDate}>Last updated: {lastUpdated}</p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className="container">
            <article className={styles.card}>
              <h2>1. Acceptance of Terms</h2>
              <p>
                Accessing our website, requesting a proposal, or using any Vastora Tech service signifies your
                acceptance of these Terms &amp; Conditions. If you do not agree, please discontinue use immediately.
              </p>
            </article>

            <article className={styles.card}>
              <h2>2. Services</h2>
              <p>We provide end-to-end digital solutions, including:</p>
              <ul>
                {serviceList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Each engagement includes a detailed scope, pricing, and delivery timeline. Work commences only after
                mutual agreement on the proposal and milestones.
              </p>
            </article>

            <article className={styles.card}>
              <h2>3. Payments</h2>
              <ul>
                {paymentNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.card}>
              <h2>4. Intellectual Property</h2>
              <ul>
                {ipNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.card}>
              <h2>5. Third-Party Tools</h2>
              <p>
                Our workflows often integrate reputable third-party plugins, APIs, or SaaS platforms. Vastora Tech is
                not responsible for:
              </p>
              <ul>
                {thirdPartyNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>Premium licenses or subscriptions are billed separately to the client when required.</p>
            </article>

            <article className={styles.card}>
              <h2>6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Vastora Tech will not be liable for:</p>
              <ul>
                {liabilityNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.card}>
              <h2>7. Client Responsibilities</h2>
              <ul>
                {clientResponsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className={styles.card}>
              <h2>8. Confidentiality</h2>
              <p>
                Both parties agree to safeguard confidential information, trade secrets, and proprietary data shared
                during the engagement. Information will not be disclosed without prior written consent, unless
                required by law.
              </p>
            </article>

            <article className={styles.card}>
              <h2>9. Termination</h2>
              <p>We reserve the right to pause or terminate services if:</p>
              <ul>
                {terminationNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Incomplete work, assets, or credentials remain with Vastora Tech until outstanding payments are
                settled.
              </p>
            </article>

            <article className={styles.card}>
              <h2>10. Changes to Terms</h2>
              <p>
                We may revise these Terms &amp; Conditions to reflect new services, regulations, or internal policies.
                Updates are effective immediately upon posting, and continued use constitutes acceptance.
              </p>
            </article>

            <article className={styles.card}>
              <h2>11. Contact</h2>
              <p>
                For questions about these terms, legal requests, or project concerns, contact us at
                {" "}
                <a href="mailto:info@vastoratech.com">info@vastoratech.com</a>.
              </p>
            </article>
          </div>
        </section>
      </main>
      <FooterFive style={true} />
    </>
  );
};

export default TermsConditions;
