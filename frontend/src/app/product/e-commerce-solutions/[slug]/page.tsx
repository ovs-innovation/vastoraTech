import DemoDetails from '@/components/demos/DemoDetails';

export default function DemoProductPage({ params }: { params: { slug: string } }) {
  return <DemoDetails slug={params.slug} isAdmin={false} />;
}

