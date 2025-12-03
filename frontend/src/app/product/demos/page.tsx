import Demos from "@/components/demos";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Vastora Tech - Software Development & Digital Marketing Agency",
//    alternates: {
//        canonical: "https://vastoratech.com/services/white-label-solutions",
//    },
};

const index = () => {
    return (
        <Wrapper>
            <Demos />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;

