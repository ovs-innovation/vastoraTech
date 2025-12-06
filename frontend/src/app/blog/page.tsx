 
import Blog from '@/components/blogs/blog';
import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';
export const metadata = {
    title: "Blog – Website, E-Commerce & Digital Marketing Insights | Vastora Tech",
    description: "Read insights on website development, E-Commerce strategies, SEO tips, social media marketing and online business growth.",
    alternates: {
        canonical: "https://vastoratech.com/blog",
    },
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