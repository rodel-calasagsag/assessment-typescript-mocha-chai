import { Chance } from 'chance';

export function generateArray(size: number): Fixture {
  const chance = new Chance();

  // generate unique emails
  const uniqueSize = Math.floor(size / 2);
  const uniques = chance.unique(chance.email, uniqueSize);
  // todo handle cases where size is an odd number

  // todo improve distribution of dupes
  const dupes = chance.shuffle(uniques);

  return {
    input: uniques.concat(dupes),
    expectedOutput: uniques
  };
}
