import Demos from "@/components/demos";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Demos - Ready Website Demos | Next js Template",
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

