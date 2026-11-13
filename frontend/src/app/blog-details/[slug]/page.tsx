import BlogDetails from '@/components/blogs/blog-details';
import { notFound } from 'next/navigation';
import { EDITORIAL_ARTICLES } from '@/data/editorial-blog-data';
import { getEditorialArticleContent } from '@/data/editorial-articles-content';

async function getBlog(slug: string) {
  // 1. Try remote or local API endpoint if configured
  try {
    const url = process.env.NEXT_PUBLIC_API_URL
      ? `${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${slug}`
      : `http://localhost:8081/api/blogs/slug/${slug}`;
    const resp = await fetch(url, { cache: 'no-store' });
    if (resp.ok) {
      const data = await resp.json();
      if (data?.data) return data.data;
    }
  } catch {
    // API is offline or unreachable; gracefully fallback to curated local data
  }

  // 2. Check local curated editorial articles
  const localMatch = EDITORIAL_ARTICLES.find(
    (a) => a.slug === slug || a.id === slug
  );

  if (localMatch) {
    return {
      _id: localMatch.id,
      slug: localMatch.slug,
      title: localMatch.title,
      category: localMatch.category,
      description: localMatch.description,
      content: localMatch.content || getEditorialArticleContent(localMatch.slug, localMatch.description),
      image: localMatch.image,
      author: localMatch.author,
      authorRole: localMatch.authorRole,
      createdAt: localMatch.publishedAt,
      tags: localMatch.tags,
      readTime: localMatch.readTime,
      editorialNumber: localMatch.editorialNumber,
      highlightQuote: localMatch.highlightQuote,
    };
  }

  return null;
}

export default async function BlogDetailsPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  if (!blog) return notFound();
  return <BlogDetails blog={blog} />;
}
