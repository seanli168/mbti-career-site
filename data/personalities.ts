export interface Career {
  title: string;
  description: string;
}

export interface Personality {
  type: string;
  name: string;
  summary: string;
  strengths: string[];
  careers: Career[];
}

export const personalities: Personality[] = [
  {
    type: "INTJ",
    name: "Architect",
    summary:
      "INTJs are strategic thinkers who thrive in structured and high-level problem-solving careers.",

    strengths: [
      "Strategic thinking",
      "Independent work",
      "Long-term planning",
      "Analytical mindset",
    ],

    careers: [
      {
        title: "Software Architect",
        description:
          "Design scalable systems and long-term technical solutions.",
      },
      {
        title: "Data Scientist",
        description:
          "Analyze complex datasets and generate strategic insights.",
      },
      {
        title: "Management Consultant",
        description:
          "Solve high-level business and organizational problems.",
      },
    ],
  },

  {
    type: "INFP",
    name: "Mediator",
    summary:
      "INFPs value creativity, meaning, and emotional connection in their careers.",

    strengths: [
      "Creativity",
      "Empathy",
      "Adaptability",
      "Strong values",
    ],

    careers: [
      {
        title: "Writer",
        description:
          "Express ideas and emotions through storytelling and content.",
      },
      {
        title: "Graphic Designer",
        description:
          "Create visually meaningful and emotional experiences.",
      },
      {
        title: "Counselor",
        description:
          "Help people navigate emotions and personal growth.",
      },
    ],
  },
];