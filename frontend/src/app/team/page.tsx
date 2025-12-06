import ScrollToTop from "@/components/common/scroll-to-top";
import Team from "@/components/inner-pages/team";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
 title: "Our Team – Experts Behind Vastora Tech's Digital Solutions",
 description: "Meet the professional team at Vastora Tech building websites, E-Commerce solutions and digital marketing strategies for business success.",
 alternates: {
     canonical: "https://vastoratech.com/team",
 },
};
const index = () => {
    return (
        <Wrapper>
            <Team />
            <ScrollToTop  /> 
        </Wrapper>
    );
};

export default index;