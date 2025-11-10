import BlogDetails from '@/components/blogs/blog-details';
import { notFound } from 'next/navigation';

async function getBlog(slug: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${slug}`
    : `http://localhost:8081/api/blogs/slug/${slug}`;
  const resp = await fetch(url, { cache: 'no-store' });
  const data = await resp.json();
  return data.data || null;
}

export default async function BlogDetailsPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  if (!blog) return notFound();
  return <BlogDetails blog={blog} />;
}
