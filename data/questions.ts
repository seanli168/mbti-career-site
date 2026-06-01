export interface Question {
  id: number;
  text: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  direction: "A" | "B";
}

export const questions: Question[] = [
  {
    id: 1,
    text: "You gain energy from spending time with people.",
    dimension: "EI",
    direction: "A",
  },
  {
    id: 2,
    text: "You prefer quiet time alone to recharge.",
    dimension: "EI",
    direction: "B",
  },
  {
    id: 3,
    text: "You focus more on facts than possibilities.",
    dimension: "SN",
    direction: "A",
  },
  {
    id: 4,
    text: "You enjoy imagining future possibilities.",
    dimension: "SN",
    direction: "B",
  },
  {
    id: 5,
    text: "Logic is more important than emotions.",
    dimension: "TF",
    direction: "A",
  },
  {
    id: 6,
    text: "People's feelings influence your decisions.",
    dimension: "TF",
    direction: "B",
  },
  {
    id: 7,
    text: "You like detailed plans.",
    dimension: "JP",
    direction: "A",
  },
  {
    id: 8,
    text: "You prefer flexibility and spontaneity.",
    dimension: "JP",
    direction: "B",
  },

  {
    id: 9,
    text: "You enjoy networking events.",
    dimension: "EI",
    direction: "A",
  },
  {
    id: 10,
    text: "You prefer one-on-one conversations.",
    dimension: "EI",
    direction: "B",
  },

  {
    id: 11,
    text: "You trust proven methods.",
    dimension: "SN",
    direction: "A",
  },
  {
    id: 12,
    text: "You enjoy exploring unconventional ideas.",
    dimension: "SN",
    direction: "B",
  },

  {
    id: 13,
    text: "You make decisions objectively.",
    dimension: "TF",
    direction: "A",
  },
  {
    id: 14,
    text: "You prioritize harmony.",
    dimension: "TF",
    direction: "B",
  },

  {
    id: 15,
    text: "You like schedules.",
    dimension: "JP",
    direction: "A",
  },
  {
    id: 16,
    text: "You dislike rigid routines.",
    dimension: "JP",
    direction: "B",
  },

  {
    id: 17,
    text: "You enjoy leading group discussions.",
    dimension: "EI",
    direction: "A",
  },
  {
    id: 18,
    text: "You enjoy working independently.",
    dimension: "EI",
    direction: "B",
  },

  {
    id: 19,
    text: "You focus on present realities.",
    dimension: "SN",
    direction: "A",
  },
  {
    id: 20,
    text: "You often think about future possibilities.",
    dimension: "SN",
    direction: "B",
  },
];