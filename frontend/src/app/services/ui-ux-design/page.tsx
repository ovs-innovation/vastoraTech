import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import UxUiDesignServices from "@/components/services/ux-ui-design-services/index";

export const metadata = {
    title: "Vastora Tech - UI/UX Design Services", 
};
const index = () => {
    return (
        <Wrapper>
            <UxUiDesignServices />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index; 