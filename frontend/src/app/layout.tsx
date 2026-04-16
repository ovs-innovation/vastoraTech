import "../styles/index.scss";
import Script from "next/script";
import WhatsappButton from "@/components/common/WhatsappButton";
import TawkMessenger from "@/components/common/TawkMessenger";
import DelayedTracking from "@/components/common/DelayedTracking";
import { Metadata } from 'next';
import { DM_Sans, Plus_Jakarta_Sans, Urbanist } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--tp-ff-dm',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--tp-ff-jakarta',
});

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--tp-ff-urbanist',
});

export const metadata: Metadata = {
  authors: [{ name: "Vastora Tech"}],
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />

        {/* Font Preloads */}
        <link rel="preload" href="/assets/fonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        <meta name="google-site-verification" content="V4aLrltshefXGf6Lb7IC9S88YVb7JpLbTpbxIDPc1xg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

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
