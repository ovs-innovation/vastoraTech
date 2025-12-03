import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import WebDevelopment from "@/components/services/web-development";

export const metadata = {
    title: "Vastora Tech - Web Development-Service",
    alternates: {
        canonical: "https://vastoratech.com/services/web-development",
    },
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