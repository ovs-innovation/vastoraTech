import dynamic from "next/dynamic";
import BlogMasonry from '@/components/inner-pages/blog-masonry';
import Wrapper from '@/layout/Wrapper';

const ScrollToTop = dynamic(() => import('@/components/common/scroll-to-top'), { ssr: false });

export const metadata = {
    title: "Blog Masonry - SEO Marketing - Digital Marketing & SEO Agency Next js Template",
};

const index = () => {
    return (
        <Wrapper>
            <BlogMasonry />
            <ScrollToTop />            
        </Wrapper>
    );
};

export default index;