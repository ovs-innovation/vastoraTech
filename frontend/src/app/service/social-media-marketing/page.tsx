import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SocialMediaMarketingServices from "@/components/services/social-media-marketing-services";

export const metadata = {
    title: "Vastora Tech - Social Media Marketing Services",
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