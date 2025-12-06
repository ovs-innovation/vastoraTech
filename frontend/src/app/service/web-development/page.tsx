import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import WebDevelopment from "@/components/services/web-development";

export const metadata = {
    title: "Web Development Services – Modern & Custom Business Websites | Vastora Tech",
    description: "We build clean, modern and mobile-ready business websites tailored to your brand. Get a professional online presence designed for growth.",
    alternates: {
        canonical: "https://vastoratech.com/services/web-development",
    },
};
const index = () => {
    return (
        <Wrapper>
            <WebDevelopment />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;