import { notFound } from "next/navigation";
import { personalities } from "../../../data/personalities";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ResultPage({
  params,
}: Props) {
  const { slug } = await params;

  const personality = personalities.find(
    (p) => p.type.toLowerCase() === slug
  );

  if (!personality) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-4">
        {personality.type}
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        {personality.name}
      </p>

      <p className="mb-10">
        {personality.summary}
      </p>

      <a
        href={`/careers/${slug}`}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        View Career Recommendations
      </a>
    </main>
  );
}