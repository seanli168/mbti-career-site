import { Metadata } from "next";
import { notFound } from "next/navigation";

import { guides } from "@/data/guides";
import { getGuideContent } from "@/data/guides-content";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return guides.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const exists = guides.includes(params.slug);

  if (!exists) {
    return {};
  }

  const guide = getGuideContent(params.slug);

  return {
    title: guide.title,
    description: `${guide.title} - Complete career guide, personality insights, salary expectations, strengths, weaknesses and job recommendations.`,
  };
}

export default function GuidePage({
  params,
}: Props) {
  const exists = guides.includes(params.slug);

  if (!exists) {
    notFound();
  }

  const guide = getGuideContent(params.slug);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <article>

        <h1 className="text-5xl font-bold mb-6">
          {guide.title}
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Complete guide to {guide.title.toLowerCase()}.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Overview
          </h2>

          <p className="text-gray-700 leading-8">
            Understanding personality traits can help people choose
            careers that align with their strengths, interests,
            communication style and long-term goals.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Best Career Options
          </h2>

          <p className="text-gray-700 leading-8">
            Popular career choices often include technology,
            business, healthcare, education and creative industries.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Salary Expectations
          </h2>

          <p className="text-gray-700 leading-8">
            Salaries vary based on experience, education,
            location and industry demand.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Work Environment
          </h2>

          <p className="text-gray-700 leading-8">
            Finding the right workplace environment is often
            as important as selecting the right career.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            <div>
              <h3 className="font-semibold">
                Is this career path a good choice?
              </h3>

              <p className="text-gray-600">
                It depends on your interests,
                skills and personality preferences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can personality affect career success?
              </h3>

              <p className="text-gray-600">
                Personality can influence work preferences,
                communication styles and job satisfaction.
              </p>
            </div>

          </div>
        </section>

      </article>

    </main>
  );
}