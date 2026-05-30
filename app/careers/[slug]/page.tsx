import { notFound } from "next/navigation";
import { personalities } from "../../../data/personalities";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return personalities.map((personality) => ({
    slug: personality.type.toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: PageProps) {
  const { slug } = await params;

  const personality = personalities.find(
    (p) => p.type.toLowerCase() === slug
  );

  if (!personality) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `Best Careers for ${personality.type}`,
    description: personality.summary,
  };
}

export default async function CareerPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const personality = personalities.find(
    (p) => p.type.toLowerCase() === slug
  );

  if (!personality) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        Best Careers for {personality.type}
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        {personality.summary}
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Key Strengths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personality.strengths.map((strength) => (
            <div
              key={strength}
              className="border rounded-lg p-4"
            >
              {strength}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Recommended Careers
        </h2>

        <div className="space-y-4">
          {personality.careers.map((career) => (
            <div
              key={career.title}
              className="border rounded-lg p-6"
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