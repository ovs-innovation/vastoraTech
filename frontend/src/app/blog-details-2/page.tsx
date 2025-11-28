import BlogDetailsTwo from "@/components/blogs/blog-details-2";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Vastora Tech - Software Development & Digital Marketing Agency",
};

const index = () => {
    return (
        <Wrapper>
            <BlogDetailsTwo />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;