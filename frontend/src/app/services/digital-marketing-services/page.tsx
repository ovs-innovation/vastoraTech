import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import DigitalMarketingServices from "@/components/services/digital-marketing-services";

export const metadata = {
    title: "Vastora Tech - Digital Marketing Services", 
};
const index = () => {
    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vastora Tech",
    "url": "https://vastoratech.com",
    "description": "Vastora Tech offers professional web development, eCommerce solutions, digital marketing, SEO, social media marketing, and mobile app development services in India. We deliver end-to-end solutions for businesses of all sizes.",
    "keywords": [
      "digital marketing services",
      "digital marketing agency in Delhi",
      "digital marketing agency in Noida",
      "digital marketing services near me",
      "social media marketing",
      "social media marketing agency",
      "social media management agencies",
      "social marketing agency",
      "best social media agency",
      "SMM Company in Noida",
      "Best Social Media Marketing Agency",
      "SMM Company near me",
      "social media in marketing"
    ]
  };
    return (
        <Wrapper>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DigitalMarketingServices />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index; 