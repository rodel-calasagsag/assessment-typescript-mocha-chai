import { Chance } from 'chance';

const chance = new Chance();

export function generateData(size: number): TestData {
  const horRule = '====================================================';
  console.log(
    `${horRule}\nGenerating a list of ${size} email/s. Please wait...`
  );

  // generate unique emails
  const uniqueSize = Math.floor(size / 2);
  const uniques = chance.unique(() => {
    return `${chance.guid()}@${chance.domain()}`;
  }, uniqueSize);

  // pick emails to duplicate
  const dupesSize = size - uniqueSize;
  const dupes = chance.pickset(uniques, dupesSize);

  // combine the unique and duplicate emails and shuffle them
  const combined = uniques.concat(dupes);
  const input = chance.shuffle(combined);

  // get the expected output using an alternative approach
  const seen: string[] = [];
  const expectedOutput = input.reduce((acc, currentValue) => {
    if (!acc.includes(currentValue)) {
      acc.push(currentValue);
    }

    return acc;
  }, seen);

  console.log(`Done!\n${horRule}`);

  return {
    source: input,
    expectedOutput: expectedOutput
  };
}
