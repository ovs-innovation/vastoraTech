import About from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";

export const metadata = {
    title: "About Vastora Tech – Web Development & E-Commerce Solutions Company",
    description: "Vastora Tech is a digital solutions company delivering clean websites, ready-to-use e-commerce stores, branding, SEO and social media services for growing brands.",
    alternates: {
        canonical: "https://vastoratech.com/about-us",
    },
};
const index = () => {
    return (
        <Wrapper>
            <About />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;