import BlogList from '@/components/blogs/blog-list';
import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
   title: "Vastora Tech - Software Development & Digital Marketing Agency",
};

const index = () => {
    return (
        <Wrapper>
            <BlogList />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;