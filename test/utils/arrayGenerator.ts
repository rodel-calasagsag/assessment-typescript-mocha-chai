import { Chance } from 'chance';

export function generateArray(arrayLength) {
  const chance = new Chance();

  const uniqueEmails = chance.unique(chance.email, arrayLength);
  
}
