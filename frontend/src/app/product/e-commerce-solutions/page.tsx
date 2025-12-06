import Demos from "@/components/demos";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "E-Commerce Solutions – Ready-to-Use Online Store Setup | Vastora Tech",
   description: "Launch your online store quickly with Vastora Tech's ready-to-use E-Commerce solution. Fully branded, product-ready and easy to manage for any business.",
   alternates: {
       canonical: "https://vastoratech.com/product/e-commerce-solutions",
   },
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

