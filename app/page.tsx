
import Link from "next/link";

const personalities = [
  "INTJ",
  "INTP",
  "INFJ",
  "INFP",
  "ENTJ",
  "ENTP",
  "ENFJ",
  "ENFP",
  "ISTJ",
  "ISFJ",
  "ISTP",
  "ISFP",
  "ESTJ",
  "ESFJ",
  "ESTP",
  "ESFP",
];

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Discover Your Perfect Career Based on Your MBTI Personality
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Take our free MBTI career test and explore the best jobs,
          strengths, and career paths for your personality type.
        </p>

        <Link
          href="/test"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Take Free MBTI Test
        </Link>
      </section>

      {/* 16 PERSONALITIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Careers by Personality Type
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {personalities.map((mbti) => (
            <Link
              key={mbti}
              href={`/careers/${mbti.toLowerCase()}`}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-center">
                {mbti}
              </h3>

              <p className="text-gray-500 text-center mt-2">
                View Careers
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHAT IS MBTI */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          What Is MBTI?
        </h2>

        <p className="text-gray-600 leading-8 mb-6">
          The Myers-Briggs Type Indicator (MBTI) is one of the world's
          most widely used personality assessment frameworks.
          It categorizes people into 16 personality types based on how
          they perceive the world and make decisions.
        </p>

        <p className="text-gray-600 leading-8">
          Understanding your MBTI type can help you discover career
          paths that match your strengths, communication style,
          motivations, and work preferences.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Take an MBTI Career Test?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Career Guidance
            </h3>

            <p className="text-gray-600">
              Discover jobs that align with your natural strengths.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Self Awareness
            </h3>

            <p className="text-gray-600">
              Understand how you learn, communicate, and solve problems.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Better Decisions
            </h3>

            <p className="text-gray-600">
              Make more informed education and career choices.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Is the MBTI test free?
            </h3>

            <p className="text-gray-600">
              Yes, our MBTI career assessment is completely free.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              How accurate is MBTI?
            </h3>

            <p className="text-gray-600">
              MBTI is widely used for self-development and career
              exploration, helping people better understand their
              personality preferences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              Can MBTI help choose a career?
            </h3>

            <p className="text-gray-600">
              Yes. Understanding your personality type can help identify
              careers that fit your strengths and work style.
            </p>
          </div>
              

        </div>
      </section>
  <section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-8">
    Popular Career Guides
  </h2>

  <div className="grid md:grid-cols-3 gap-4">

    <Link href="/guides/best-jobs-for-intj">
      Best Jobs for INTJ
    </Link>

    <Link href="/guides/high-paying-jobs-for-intp">
      High Paying Jobs for INTP
    </Link>

    <Link href="/guides/remote-jobs-for-enfp">
      Remote Jobs for ENFP
    </Link>

  </div>
</section>
<footer className="border-t mt-20">
  <div className="max-w-6xl mx-auto px-6 py-8 flex gap-6">
    <Link href="/privacy">
      Privacy Policy
    </Link>

    <Link href="/disclaimer">
      Disclaimer
    </Link>

    <Link href="/test">
      MBTI Test
    </Link>
  </div>
</footer>

    </main>
  );
}

