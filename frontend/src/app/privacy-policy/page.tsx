import HeaderFive from "@/layout/headers/HeaderFive";
import FooterFive from "@/layout/footers/FooterFive";
import styles from "./privacy.module.css";

export const metadata = { title: "Privacy Policy | Vastora Tech" };

const lastUpdated = "November 18, 2025";

const infoWeCollect = [
    "Personal details such as name, email address, and phone number",
    "Business information shared during discovery calls or forms",
    "Website usage data, including pages visited and interaction history",
    "Messages and files submitted through our contact or project forms",
    "Technical information (IP address, browser type, device, and referrer)",
];

const usageList = [
    "Provide, customize, and improve our products and services",
    "Respond to enquiries, proposals, and customer support requests",
    "Process projects, invoices, and contractual documentation",
    "Send service updates, offers, and educational resources",
    "Protect our platform, investigate misuse, and maintain reliability",
];

const cookiesList = [
    "Remember preferences so returning visits feel seamless",
    "Analyze on-site traffic and performance trends",
    "Personalize content and measure marketing effectiveness",
];

const thirdPartyList = [
    "Secure hosting and infrastructure partners",
    "Payment gateways and invoicing providers",
    "Analytics platforms that help us understand engagement",
    "Communication tools that power emails, chat, or project collaboration",
];

const rightsList = [
    "Request access to the personal information we store",
    "Ask us to correct, update, or delete specific data",
    "Withdraw consent for optional communications",
    "Object to certain processing activities where legally applicable",
    "Receive answers about how and why your information is used",
];

const PrivacyPolicy = () => {
    return (
        <>
            <HeaderFive />
            <main className={styles.privacyMain}>
                <section className={styles.privacyHero}>
                    <div className="container">
                        <p className={styles.privacyHeroEyebrow}>Privacy Policy</p>
                        <h1 className={styles.privacyHeroTitle}>Vastora Tech Privacy Policy</h1>
                        <p className={styles.privacyHeroLead}>
                            We respect your privacy and strive to be transparent about the data we collect,
                            how we use it, and the safeguards we apply across every Vastora Tech experience.
                        </p>
                        <p className={styles.privacyHeroDate}>Last updated: {lastUpdated}</p>
                    </div>
                </section>

                <section className={styles.privacySection}>
                    <div className="container">
                        <div className={styles.privacyCard}>
                            <h2 className={styles.cardHeading}>1. Information We Collect</h2>
                            <p className={styles.cardCopy}>
                                We only gather details that help us deliver better services or comply with legal
                                requirements. This may include:
                            </p>
                            <ul className={styles.cardList}>
                                {infoWeCollect.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.privacyCard}>
                            <h2 className={styles.cardHeading}>2. How We Use Your Information</h2>
                            <p className={styles.cardCopy}>We rely on your information to keep projects moving and to deliver value.</p>
                            <ul className={styles.cardList}>
                                {usageList.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className={styles.cardCopy}>We never sell personal information or share it with unauthorized third parties.</p>
                        </div>

                        <div className={styles.privacyCard}>
                            <h2 className={styles.cardHeading}>3. Cookies &amp; Tracking</h2>
                            <p className={styles.cardCopy}>
                                Our website uses cookies and similar technologies to keep things fast and relevant.
                                Cookies help us:
                            </p>
                            <ul className={styles.cardList}>
                                {cookiesList.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className={styles.cardCopy}>You can disable cookies anytime through your browser settings.</p>
                        </div>

                        <div className={styles.privacyCard}>
                            <h2 className={styles.cardHeading}>4. Data Protection &amp; Security</h2>
                            <p className={styles.cardCopy}>
                                We implement layered security, limit access to authorized personnel, and review our
                                processes regularly. While no system is 100% secure, we promptly investigate and act
                                on any suspected issue. Vastora Tech is not responsible for breaches originating from
                                third-party services, hosting providers, or user negligence.
                            </p>
                        </div>

                        <div className={styles.privacyCard}>
                            <h2 className={styles.cardHeading}>5. Third-Party Services</h2>
                            <p className={styles.cardCopy}>
                                We partner with a short list of trusted providers to run our business. Depending on
                                your engagement, these partners may process limited personal data on our behalf:
                            </p>
                            <ul className={styles.cardList}>
                                {thirdPartyList.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className={styles.cardCopy}>
                                Each provider maintains its own privacy policy and compliance posture. We vet them for
                                reliability but cannot control their independent practices.
                            </p>
                        </div>

                        <div className={styles.privacyCard}>
                            <h2 className={styles.cardHeading}>6. Data Retention</h2>
                            <p className={styles.cardCopy}>
                                We keep information only as long as necessary to deliver services, meet contractual
                                obligations, or comply with applicable law. When data is no longer required, it is
                                securely deleted or anonymized.
                            </p>
                        </div>

                        <div className={styles.privacyCard}>
                            <h2 className={styles.cardHeading}>7. Your Rights</h2>
                            <p className={styles.cardCopy}>You have control over how we use your information. You can:</p>
                            <ul className={styles.cardList}>
                                {rightsList.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <p className={styles.cardCopy}>
                                Email us at <a href="mailto:info@vastoratech.com">info@vastoratech.com</a> to submit any
                                request. We may need to verify your identity before acting.
                            </p>
                        </div>

                        <div className={styles.privacyCard}>
                            <h2 className={styles.cardHeading}>8. Policy Updates</h2>
                            <p className={styles.cardCopy}>
                                We review this policy periodically to reflect new regulations, technologies, or
                                services. Updates take effect once posted on this page, and continuing to use the
                                website means you accept the latest version.
                            </p>
                        </div>

                        <div className={styles.privacyContact}>
                            <h3>Need more details?</h3>
                            <p>
                                Reach out to our team at <a href="mailto:info@vastoratech.com">info@vastoratech.com</a> or call
                                +91 96670 92077, and we will be happy to clarify how your data is handled.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <FooterFive style={true} />
        </>
    );
};

export default PrivacyPolicy;
