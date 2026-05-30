import Link from "next/link";

const personalities = [
  "INTJ","INTP","INFJ","INFP",
  "ENTJ","ENTP","ENFJ","ENFP",
  "ISTJ","ISFJ","ISTP","ISFP",
  "ESTJ","ESFJ","ESTP","ESFP"
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4">
          Discover Your Ideal Career Based on Your MBTI
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Take our MBTI personality test and find the best high-paying, low-stress, and fulfilling jobs for you.
        </p>
        <Link href="/test" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg">
          Take the Test Now
        </Link>
      </section>

      {/* MBTI Cards */}
      <section className="py-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Explore Careers by MBTI</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalities.map((mbti) => (
            <Link
              key={mbti}
              href={`/careers/${mbti.toLowerCase()}`}
              className="bg-white border shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-center">{mbti}</h4>
              <p className="text-gray-600 text-center">View career options</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <Link href="/test" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg">
          Start Your MBTI Career Test
        </Link>
      </section>
    </div>
  );
}