import "../styles/index.scss";
import Script from "next/script";
import WhatsappButton from "@/components/common/WhatsappButton";
import TawkMessenger from "@/components/common/TawkMessenger";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head> 
        <meta name="google-site-verification" content="V4aLrltshefXGf6Lb7IC9S88YVb7JpLbTpbxIDPc1xg" />
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Urbanist:wght@300;400;500;600;700;800&display=swap"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PX89884L');`,
          }}
        />
        {/* End Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FLNPVZCVKR"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FLNPVZCVKR');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '767820493070214');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PX89884L"
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
            alt="facebook-pixel"
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
