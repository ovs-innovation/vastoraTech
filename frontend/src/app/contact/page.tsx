import Contact from "@/components/contact";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Contact Vastora Tech – Book a Call for Website or E-Commerce Solutions",
    description: "Contact Vastora Tech for website development, E-Commerce solutions, SEO, social media or digital marketing services. Let's grow your business together.",
    alternates: {
        canonical: "https://vastoratech.com/contact",
    },
};

const index = () => {
    return (
        <Wrapper>
            <Contact />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;