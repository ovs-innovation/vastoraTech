import BlogDetails from "@/components/blogs/blog-details";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";
import { EDITORIAL_ARTICLES } from "@/data/editorial-blog-data";
import { getEditorialArticleContent } from "@/data/editorial-articles-content";

export const metadata = {
  title: "Why Choosing an Ecommerce Website Development Company | Vastora Tech",
  description: "Learn how to choose the right eCommerce development company for your business to ensure scalability, security, and growth.",
};

const secondArticle = EDITORIAL_ARTICLES[1];
const blogData = {
  _id: secondArticle.id,
  slug: secondArticle.slug,
  title: secondArticle.title,
  category: secondArticle.category,
  description: secondArticle.description,
  content: secondArticle.content || getEditorialArticleContent(secondArticle.slug, secondArticle.description),
  image: secondArticle.image,
  author: secondArticle.author,
  authorRole: secondArticle.authorRole,
  createdAt: secondArticle.publishedAt,
  tags: secondArticle.tags,
  readTime: secondArticle.readTime,
  editorialNumber: secondArticle.editorialNumber,
  highlightQuote: secondArticle.highlightQuote,
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