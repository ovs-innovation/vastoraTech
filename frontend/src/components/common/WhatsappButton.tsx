"use client";

const whatsappNumber = "+918595658592";
const phoneNumber = "+918595658592";
const presetMessage =
  "Hi Vastora Tech team! I just visited your website and would love to discuss a project.";

const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  presetMessage
)}`;

const WhatsappButton = () => {
  return (
    <div className="floating-contact-stack" aria-label="Quick contact actions">
      <a
        href={`tel:${phoneNumber}`}
        className="call-float"
        aria-label="Call Us: +91 85956 58592"
      >
        <span className="contact-float__label" role="tooltip">Call Us</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="contact-float__icon"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.56a.99.99 0 0 0 .24-1.02A11.36 11.36 0 0 1 8.96 4.3c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.42c0-.55-.45-1-.99-1z" />
        </svg>
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <span className="contact-float__label" role="tooltip">Chat on WhatsApp</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="contact-float__icon"
        >
          <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.48 1.34 5L2 22l5.18-1.36c1.47.8 3.14 1.23 4.86 1.23 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.83 14.28c-.24.68-1.2 1.25-1.93 1.37-.5.08-1.15.15-3.34-.76-2.79-1.15-4.59-4.01-4.73-4.2-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.96-2.31.25-.28.55-.35.73-.35.19 0 .37 0 .53.01.17.01.4.06.61.57.22.52.74 1.8.8 1.93.07.13.11.29.02.47-.09.18-.14.29-.27.45-.14.16-.29.35-.41.48-.14.14-.28.29-.12.57.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.21 2.17 1.34.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.37-.23.62-.14.25.09 1.58.74 1.85.88.27.14.45.2.52.31.06.12.06.69-.18 1.37z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsappButton;

