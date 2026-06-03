import { Metadata } from "next";
import { notFound } from "next/navigation";
import { personalities } from "@/data/personalities";
import { compareList } from "@/data/compare";

type Props = { params: { slug: string } };

// 生成 120 个组合静态页面
export async function generateStaticParams() {
  return compareList.map((item) => ({ slug: item.slug }));
}

// 每个组合页面自动生成 SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = compareList.find(c => c.slug === params.slug);
  if (!item) return {};

  const a = personalities.find(p => p.type.toLowerCase() === item.typeA);
  const b = personalities.find(p => p.type.toLowerCase() === item.typeB);
  if (!a || !b) return {};

  return {
    title: `${a.type} vs ${b.type} | MBTI Personality Comparison`,
    description: `Compare strengths, weaknesses, and career paths between ${a.type} and ${b.type}. Discover which MBTI personality fits your ideal career.`,
  };
}

export default function ComparePage({ params }: Props) {
  const item = compareList.find(c => c.slug === params.slug);
  if (!item) notFound();

  const a = personalities.find(p => p.type.toLowerCase() === item.typeA);
  const b = personalities.find(p => p.type.toLowerCase() === item.typeB);
  if (!a || !b) notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{a.type} vs {b.type}</h1>
        <p className="text-gray-600">
          Compare strengths, weaknesses, and career paths between {a.type} and {b.type}.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{a.type} Strengths</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {a.strengths.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{b.type} Strengths</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {b.strengths.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{a.type} Careers</h2>
          <div className="space-y-4">
            {a.careers.map(c => (
              <div key={c.title}>
                <p className="font-semibold">{c.title}</p>
                <p className="text-gray-600 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{b.type} Careers</h2>
          <div className="space-y-4">
            {b.careers.map(c => (
              <div key={c.title}>
                <p className="font-semibold">{c.title}</p>
                <p className="text-gray-600 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border rounded-xl p-6 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Final Comparison</h2>
        <p className="text-gray-600 leading-7">
          {a.type} is more {a.workStyle.toLowerCase()}, while {b.type} tends to be {b.workStyle.toLowerCase()}. Both personality types have strong career potential in different environments.
        </p>
      </section>

    </main>
  );
}