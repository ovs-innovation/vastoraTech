"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const DelayedTracking = () => {
  const [loadLevel, setLoadLevel] = useState(0);

  useEffect(() => {
    const triggerLoading = () => {
      if (loadLevel === 0) {
        setLoadLevel(1); // Load GTM first
        
        // Stagger the rest to prevent long main-thread tasks
        setTimeout(() => setLoadLevel(2), 2000); // GA after 2s
        setTimeout(() => setLoadLevel(3), 4000); // Meta after 4s
      }
    };

    const handleInteraction = () => triggerLoading();

    const timer = setTimeout(triggerLoading, 6000); // Also load after 6 seconds of inactivity

    window.addEventListener("scroll", handleInteraction, { once: true, passive: true });
    window.addEventListener("mousemove", handleInteraction, { once: true, passive: true });
    window.addEventListener("touchstart", handleInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      clearTimeout(timer);
    };
  }, [loadLevel]);

  if (loadLevel === 0) return null;

  return (
    <>
      {/* Google Tag Manager (Level 1) */}
      {(loadLevel >= 1) && (
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9ZGLBV2');`,
          }}
        />
      )}

      {/* Google Analytics (Level 2) */}
      {(loadLevel >= 2) && (
        <>
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
        </>
      )}

      {/* Meta Pixel Code (Level 3) */}
      {(loadLevel >= 3) && (
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
      )}
    </>
  );
};

export default DelayedTracking;
