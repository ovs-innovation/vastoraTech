
import BlogDetails from '@/components/blogs/blog-details';
import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';

export const metadata = {
    title: "Blog Details - SEO Marketing - Digital Marketing & SEO Agency Next js Template",
};

const mockBlog = {
    title: "Sample Blog Title",
    subtitle: "A subtitle for this blog",
    description: "This is a preview blog description for SEO and marketing demo.",
};

const index = () => {
    return (
        <Wrapper>
            <BlogDetails blog={mockBlog} />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;