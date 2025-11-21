"use client";

const whatsappNumber = "9555521611";
const phoneNumber = "+919555521611";
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
        aria-label="Call Vastora Tech"
      >
        <span className="contact-float__label">Call</span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="14" cy="14" r="14" fill="#0d1535" />
          <path
            d="M10.55 8.5h-.02c-.32 0-.62.12-.85.35l-1.96 1.96c-.45.45-.54 1.14-.22 1.69 2.02 3.46 4.94 6.38 8.4 8.4.55.32 1.24.23 1.7-.22l1.95-1.95c.48-.48.54-1.22.15-1.78l-.01-.02-1.17-1.62c-.38-.53-1.08-.73-1.68-.48l-.18.08c-.73.34-1.6.08-2.05-.59l-.11-.17a31.22 31.22 0 0 1-1.58-2.42l-.07-.12c-.38-.61-.26-1.4.3-1.86l.13-.1c.57-.44.71-1.26.29-1.85l-1.14-1.6c-.23-.33-.6-.53-1-.53Z"
            fill="#00c6ff"
          />
        </svg>
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with Vastora Tech on WhatsApp"
      >
        <span className="contact-float__label">WhatsApp</span>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="18" cy="18" r="18" fill="#25D366" />
          <path
            d="M27.6 8.7C24.9 6 21.3 4.5 17.4 4.5C9.7 4.5 3.5 10.7 3.5 18.4C3.5 20.7 4 23 5 25.1L3.5 31.5L10.2 30.3C12.1 31.4 14.3 32 16.5 32C24.2 32 30.4 25.8 30.4 18.1C30.4 14.2 28.9 10.6 26.2 7.9L27.6 8.7Z"
            fill="#1DA955"
            opacity="0.25"
          />
          <path
            d="M14.3 11.2C13.9 10.7 12.9 10.1 12.2 10.1C11.5 10.1 11.1 10.1 10.7 10.7C10.3 11.3 9.2 12.4 9.2 14.5C9.2 16.6 10.3 18.2 10.5 18.5C10.7 18.8 12.3 21.5 14.9 22.8C17.1 23.8 17.6 23.7 18.3 23.6C19 23.5 20.6 22.6 20.8 22C21 21.4 21 21 20.9 20.9C20.8 20.7 20.4 20.5 19.9 20.3C19.4 20.1 18 19.4 17.7 19.3C17.4 19.2 17.2 19.2 16.9 19.6C16.6 20 16.1 20.6 15.9 20.7C15.7 20.8 15.5 20.7 15 20.4C14.5 20.1 13.7 19.6 13 18.8C12.3 18 11.9 17.1 11.8 16.7C11.6 16.3 11.8 16.1 11.9 15.9C12.1 15.7 12.3 15.4 12.4 15.3C12.5 15.1 12.5 15 12.4 14.8C12.3 14.6 12 14.1 11.7 13.8L14.3 11.2Z"
            fill="white"
          />
        </svg>
      </a>
      
    </div>
  );
};

export default WhatsappButton;

