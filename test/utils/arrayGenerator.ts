import { Chance } from 'chance';

export function generateList(size: number): Fixture {
  const chance = new Chance();

  console.log(`Generating a list of ${size} email/s. Please wait...`);

  // generate unique email
  const uniqueSize = Math.floor(size / 2);
  const uniques = chance.unique(chance.email, uniqueSize);

  // pick emails to duplicate
  const dupesSize = size - uniqueSize;
  const dupes = chance.pickset(uniques, dupesSize);

  // combine the unique and duplicate emails and shuffle them
  const input = chance.shuffle(uniques.concat(dupes));

  // get the expected output using an alternative approach
  const seen: string[] = [];
  const expectedOutput = input.reduce((acc, currentValue) => {
    if (!acc.includes(currentValue)) {
      acc.push(currentValue);
    }

    return acc;
  }, seen);

  console.log('Done');

  return {
    input: input,
    expectedOutput: expectedOutput
  };
}
