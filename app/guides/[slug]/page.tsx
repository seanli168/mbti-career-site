import { notFound } from "next/navigation";
import { personalities } from "../../../data/personalities";
import { guides } from "../../../data/guides";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return guides.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  return {
    title: slug.replace(/-/g, " "),
    description: `Career guide for ${slug}`,
  };
}

export default async function GuidePage({
  params,
}: Props) {
  const { slug } = await params;

  const personality = personalities.find((p) =>
    slug.includes(p.type.toLowerCase())
  );

  if (!personality) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-6 capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        {personality.summary}
      </p>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">
          Best Careers
        </h2>

        <div className="space-y-4">
          {personality.careers.map((career) => (
            <div
              key={career.title}
              className="border rounded-xl p-5"
            >
              <h3 className="font-semibold text-xl">
                {career.title}
              </h3>

              <p className="text-gray-600">
                {career.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">
          Strengths
        </h2>

        <ul className="list-disc ml-6">
          {personality.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">
          Work Style
        </h2>

        <p>{personality.workStyle}</p>
      </section>

    </main>
  );
}