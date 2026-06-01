import { notFound } from "next/navigation";
import { personalities } from "../../../data/personalities";

type Props = {
  params: {
    slug: string;
  };
};

export default function ComparePage({ params }: Props) {
  const slug = params.slug; // example: intj-vs-infp
  const [type1, type2] = slug.toLowerCase().split("-vs-");

  const p1 = personalities.find(p => p.type.toLowerCase() === type1);
  const p2 = personalities.find(p => p.type.toLowerCase() === type2);

  if (!p1 || !p2) notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">
        {p1.type} vs {p2.type} – MBTI Comparison
      </h1>

      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">{p1.type} – {p1.nickname}</h2>
          <p className="text-gray-700 mb-2">{p1.summary}</p>
          <p className="text-gray-600"><strong>Strengths:</strong> {p1.strengths.join(", ")}</p>
          <p className="text-gray-600"><strong>Weaknesses:</strong> {p1.weaknesses.join(", ")}</p>
        </div>

        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">{p2.type} – {p2.nickname}</h2>
          <p className="text-gray-700 mb-2">{p2.summary}</p>
          <p className="text-gray-600"><strong>Strengths:</strong> {p2.strengths.join(", ")}</p>
          <p className="text-gray-600"><strong>Weaknesses:</strong> {p2.weaknesses.join(", ")}</p>
        </div>
      </section>

      <p className="text-gray-700">
        Use this comparison to understand the differences between {p1.type} and {p2.type} in terms of career preferences, work style, and personality traits.
      </p>
    </main>
  );
}