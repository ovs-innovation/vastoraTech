import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SeoServices from "@/components/services/seo-services";

export const metadata = {
    title: "SEO Services – Improve Rankings & Get Organic Traffic | Vastora Tech",
    description: "Boost your website's visibility with on-page SEO, technical improvements and keyword strategy from Vastora Tech to gain consistent organic growth.",
    alternates: {
        canonical: "https://vastoratech.com/services/seo-services",
    },
};
const index = () => {
    return (
        <Wrapper>
            <SeoServices />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;