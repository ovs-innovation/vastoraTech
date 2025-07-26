import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import WebDevelopment from "@/components/services/web-development";

export const metadata = {
    title: "Web Development Services", 
};
const index = () => {
    return (
        <Wrapper>
            <WebDevelopment />
            <ScrollToTop style={false} />
        </Wrapper>
    );
};

export default index;