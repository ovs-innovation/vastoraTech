import Contact from "@/components/contact";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Vastora Tech - Software Development & Digital Marketing Agency",
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