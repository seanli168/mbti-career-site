import { notFound } from "next/navigation";
import { personalities } from "../../../data/personalities";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return personalities.map((p) => ({
    slug: p.type.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const personality = personalities.find(
    (p) => p.type.toLowerCase() === slug
  );

  if (!personality) {
    return {
      title: "Personality Not Found",
    };
  }

  return {
    title: `Best Careers for ${personality.type}`,
    description: personality.summary,
  };
}

export default async function CareerPage({
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
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Best Careers for {personality.type}
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {personality.summary}
        </p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6">
          Key Strengths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personality.strengths.map((item) => (
            <div
              key={item}
              className="bg-white border rounded-xl p-5 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6">
          Recommended Careers
        </h2>

        <div className="space-y-5">
          {personality.careers.map((career) => (
            <div
              key={career.title}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">
                {career.title}
              </h3>

              <p className="text-gray-600">
                {career.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

