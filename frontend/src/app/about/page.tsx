import About from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";
import ScrollToTop from "@/components/common/scroll-to-top";

export const metadata = {
    title: "Vastora Tech - Software Development & Digital Marketing Agency",
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