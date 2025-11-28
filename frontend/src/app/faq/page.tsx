import ScrollToTop from "@/components/common/scroll-to-top";
import FAQ from "@/components/inner-pages/faq";
import Wrapper from "@/layout/Wrapper";


export const metadata = {
   title: "Vastora Tech - Software Development & Digital Marketing Agency",
};

const index = () => {
    return (
        <Wrapper>
            <FAQ />
            <ScrollToTop />            
        </Wrapper>
    );
};

export default index;