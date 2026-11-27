import "../styles/index.scss";
import Script from "next/script";
import WhatsappButton from "@/components/common/WhatsappButton";
import TawkMessenger from "@/components/common/TawkMessenger";
import DelayedTracking from "@/components/common/DelayedTracking";
import { Metadata } from 'next';

const dmSans = { variable: 'font-dm' };
const jakarta = { variable: 'font-jakarta' };
const urbanist = { variable: 'font-urbanist' };

export const metadata: Metadata = {
  authors: [{ name: "Vastora Tech"}],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=2", type: "image/png" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jakarta.variable} ${urbanist.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Urbanist:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />

        {/* Font Preloads */}
        <link rel="preload" href="/assets/fonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        <meta name="google-site-verification" content="V4aLrltshefXGf6Lb7IC9S88YVb7JpLbTpbxIDPc1xg" />
        <link rel="icon" type="image/png" href="/favicon.png?v=2" />
        <link rel="shortcut icon" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" />

        {/* Preconnect to tracking domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body className={`${dmSans.variable} ${jakarta.variable} ${urbanist.variable}`}>
        {/* Tracking Scripts (Delayed for Performance) */}
        <DelayedTracking />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9ZGLBV2"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Meta Pixel Code (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=767820493070214&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code (noscript) */}
        {/* <TawkMessenger /> */}
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
