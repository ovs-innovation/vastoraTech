import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import SeoServices from "@/components/services/seo-services";

export const metadata = {
    title: "Vastora Tech - SEO Services",
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