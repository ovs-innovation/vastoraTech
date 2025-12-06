import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SocialMediaMarketingServices from "@/components/services/social-media-marketing-services";

export const metadata = {
    title: "Social Media Marketing – Branding, Content & Growth Services | Vastora Tech",
    description: "Grow your business online with social media content, branding, page management and strategic marketing designed to boost engagement and conversions.",
    alternates: {
        canonical: "https://vastoratech.com/services/social-media-marketing",
    },
};
const index = () => {
    return (
        <Wrapper>
            <SocialMediaMarketingServices />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index; 