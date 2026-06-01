import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          404
        </h1>

        <p className="text-gray-600 mb-6">
          Page not found.
        </p>

        <Link
          href="/"
          className="bg-black text-white px-5 py-3 rounded-lg"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}