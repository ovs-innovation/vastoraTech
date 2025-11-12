'use client';

import ScrollToTop from '@/components/common/scroll-to-top';
import BlogMasonry from '@/components/inner-pages/blog-masonry';
import Wrapper from '@/layout/Wrapper';

const BlogMasonryPage = () => {
    return (
        <Wrapper>
            <BlogMasonry />
            <ScrollToTop />            
        </Wrapper>
    );
};

export default BlogMasonryPage;