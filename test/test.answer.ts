import { expect } from 'chai';
import { undupe } from '../src/answer';
import { generateArray } from './utils/arrayGenerator';

describe('My answer', function () {
  // test data
  const SMALL_ARRAY = ['three@m.c', 'one@m.c', 'three@m.c'];

  it('should return an array of strings', function () {
    const actual = undupe(SMALL_ARRAY);
    expect(actual).to.be.an('array');

    for (const s of SMALL_ARRAY) {
      expect(s).to.be.a('string');
    }
  });

  it('should remove duplicate emails', function () {
    const actual = undupe(SMALL_ARRAY);
    const expected = ['three@m.c', 'one@m.c'];

    expect(actual).to.deep.eq(expected);
  });

  it.only('should run under 1 sec', function () {
    const BIG_ARRAY = generateArray(20); // todo change to 100k

    const start = process.hrtime();
    const duration = process.hrtime(start);
  });
});
