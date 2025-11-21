"use client";

import Script from "next/script";

const propertyId =
  process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID ?? "69204c60e5c6ba1961929aa5";
const widgetId =
  process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ?? "1jaj2kmkj";

const TawkMessenger = () => {
  if (!propertyId || !widgetId) {
    return null;
  }

  const embedSrc = `https://embed.tawk.to/${propertyId}/${widgetId}`;

  return (
    <Script
      id="tawk-to"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
Tawk_API.onLoad = function(){
  if (Tawk_API && Tawk_API.setAttributes){
    Tawk_API.setAttributes({ position: 'left' }, function(error){});
  }
};
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='${embedSrc}';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
`,
      }}
    />
  );
};

export default TawkMessenger;

