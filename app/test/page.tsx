"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../../data/questions";

export default function TestPage() {
  const router = useRouter();

  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const handleAnswer = (
    questionId: number,
    value: boolean
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const calculateResult = () => {
    let E = 0;
    let I = 0;

    let S = 0;
    let N = 0;

    let T = 0;
    let F = 0;

    let J = 0;
    let P = 0;

    questions.forEach((q) => {
      const answer = answers[q.id];

      if (answer === undefined) return;

      if (q.dimension === "EI") {
        if (q.direction === "A") {
          answer ? E++ : I++;
        } else {
          answer ? I++ : E++;
        }
      }

      if (q.dimension === "SN") {
        if (q.direction === "A") {
          answer ? S++ : N++;
        } else {
          answer ? N++ : S++;
        }
      }

      if (q.dimension === "TF") {
        if (q.direction === "A") {
          answer ? T++ : F++;
        } else {
          answer ? F++ : T++;
        }
      }

      if (q.dimension === "JP") {
        if (q.direction === "A") {
          answer ? J++ : P++;
        } else {
          answer ? P++ : J++;
        }
      }
    });

    const result =
      (E >= I ? "E" : "I") +
      (S >= N ? "S" : "N") +
      (T >= F ? "T" : "F") +
      (J >= P ? "J" : "P");

    router.push(`/results/${result.toLowerCase()}`);
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Free MBTI Career Test
      </h1>

      <div className="space-y-8">
        {questions.map((q) => (
          <div
            key={q.id}
            className="border rounded-xl p-6"
          >
            <h2 className="font-medium mb-4">
              {q.id}. {q.text}
            </h2>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  handleAnswer(q.id, true)
                }
                className={`px-4 py-2 rounded-lg border ${
                  answers[q.id] === true
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                Agree
              </button>

              <button
                onClick={() =>
                  handleAnswer(q.id, false)
                }
                className={`px-4 py-2 rounded-lg border ${
                  answers[q.id] === false
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                Disagree
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={calculateResult}
        className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl"
      >
        View My Result
      </button>
    </main>
  );
}