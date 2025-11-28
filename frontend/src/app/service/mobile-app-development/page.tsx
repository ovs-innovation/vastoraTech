import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import MobileAppDevelopment from "@/components/services/mobile-app-development";

export const metadata = {
    title: "Vastora Tech - Mobile App Development-Service", 
};
const index = () => {
    return (
        <Wrapper>
            <MobileAppDevelopment/>
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;