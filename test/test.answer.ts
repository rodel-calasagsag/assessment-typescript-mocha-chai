import { expect } from 'chai';
import { undupe } from '../src/answer';
import { generateArray } from './utils/arrayGenerator';

describe('My answer', function () {
  let BIG_ARRAY: Fixture;

  before(function () {
    this.timeout('10s');
    BIG_ARRAY = generateArray(100000);
  });

  it('should remove duplicate emails in a small array', function () {
    const input = [
      'one@example.com',
      'two@example.com',
      'one@example.com',
      'three@example.com',
      'three@example.com',
      'two@example.com'
    ];
    const expected = [
      'one@example.com',
      'two@example.com',
      'three@example.com'
    ];
    const actual = undupe(input);

    expect(actual).to.deep.eq(expected);
  });

  it('should remove duplicate emails in a big array within 1 sec', function () {
    let t = process.hrtime();
    const actual = undupe(BIG_ARRAY.input);
    t = process.hrtime(t);

    expect(actual).to.deep.eq(BIG_ARRAY.expectedOutput);
    expect(t[0]).to.eq(0);
  });
});
