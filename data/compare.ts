// data/compare.ts
import { personalities } from "./personalities";

export type CompareData = {
  slug: string;
  typeA: string;
  typeB: string;
};

export const compareList: CompareData[] = generateComparisons();

function generateComparisons(): CompareData[] {
  const list: CompareData[] = [];

  for (let i = 0; i < personalities.length; i++) {
    for (let j = i + 1; j < personalities.length; j++) {
      const a = personalities[i].type.toLowerCase();
      const b = personalities[j].type.toLowerCase();

      list.push({
        slug: `${a}-vs-${b}`,
        typeA: a,
        typeB: b,
      });
    }
  }

  return list;
}