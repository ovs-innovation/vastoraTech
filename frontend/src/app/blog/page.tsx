 
import Blog from '@/components/blogs/blog';
import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';
export const metadata = {
    title: "Vastora Tech - Software Development & Digital Marketing Agency",
};
const index = () => {
    return (
        <Wrapper>
            <Blog />
            <ScrollToTop />            
        </Wrapper>
    );
};

export default index;