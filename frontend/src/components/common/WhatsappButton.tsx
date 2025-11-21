"use client";

const whatsappNumber = "9555521611";
const presetMessage =
  "Hi Vastora Tech team! I just visited your website and would love to discuss a project.";

const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  presetMessage
)}`;

const WhatsappButton = () => {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Vastora Tech on WhatsApp"
    >
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
  );
};

export default WhatsappButton;

