import { notFound } from "next/navigation";
import { personalities } from "../../../data/personalities";

type Props = {
  params: {
    slug: string;
  };
};

export default function GuidePage({ params }: Props) {
  const slug = params.slug;
  // 从 slug 中提取 MBTI 类型（如 best-jobs-for-intj → intj）
  const matched = personalities.find(p => slug.toLowerCase().includes(p.type.toLowerCase()));

  if (!matched) notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">{slug.replace(/-/g, " ")}</h1>

      <p className="mb-6 text-gray-700">{matched.summary}</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recommended Careers</h2>
        <ul className="list-disc list-inside space-y-2">
          {matched.careers.map((career) => (
            <li key={career.title} className="text-gray-600">{career.title}: {career.description}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Strengths & Work Style</h2>
        <p className="text-gray-600 mb-2"><strong>Strengths:</strong> {matched.strengths.join(", ")}</p>
        <p className="text-gray-600 mb-2"><strong>Weaknesses:</strong> {matched.weaknesses.join(", ")}</p>
        <p className="text-gray-600"><strong>Work Style:</strong> {matched.workStyle}</p>
      </section>
    </main>
  );
}