
import BlogDetails from '@/components/blogs/blog-details';
import ScrollToTop from '@/components/common/scroll-to-top';
import Wrapper from '@/layout/Wrapper';
import { EDITORIAL_ARTICLES } from '@/data/editorial-blog-data';
import { getEditorialArticleContent } from '@/data/editorial-articles-content';

export const metadata = {
  title: "Why Mobile Optimization Is Essential for Ecommerce Success in 2026 | Vastora Tech",
  description: "Mobile devices drive over 74% of eCommerce traffic. Discover the technical and design benchmarks for sub-second mobile commerce.",
};

const defaultArticle = EDITORIAL_ARTICLES[0];
const blogData = {
  _id: defaultArticle.id,
  slug: defaultArticle.slug,
  title: defaultArticle.title,
  category: defaultArticle.category,
  description: defaultArticle.description,
  content: defaultArticle.content || getEditorialArticleContent(defaultArticle.slug, defaultArticle.description),
  image: defaultArticle.image,
  author: defaultArticle.author,
  authorRole: defaultArticle.authorRole,
  createdAt: defaultArticle.publishedAt,
  tags: defaultArticle.tags,
  readTime: defaultArticle.readTime,
  editorialNumber: defaultArticle.editorialNumber,
  highlightQuote: defaultArticle.highlightQuote,
};

const index = () => {
  return (
    <Wrapper>
      <BlogDetails blog={blogData} />
      <ScrollToTop />
    </Wrapper>
  );
};

export default index;