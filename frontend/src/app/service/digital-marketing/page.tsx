import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import DigitalMarketingServices from "@/components/services/digital-marketing-services";

export const metadata = {
    title: "Vastora Tech - Digital Marketing Services", 
};
const index = () => {
    return (
        <Wrapper>
            <DigitalMarketingServices />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index; 