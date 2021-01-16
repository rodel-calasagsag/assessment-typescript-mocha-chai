import { expect } from 'chai';
import { undupe } from '../src/answer';
import { generateArray } from './utils/arrayGenerator';

describe('My answer', function () {
  this.timeout('6s');

  let BIG_ARRAY: TestArray;

  before(function () {
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

  it('should remove duplicate emails in a big array', function () {
    const actual = undupe(BIG_ARRAY.input);

    expect(actual).to.deep.eq(BIG_ARRAY.answer);
  });

  it('should remove duplicate emails in a big array in under 1 sec', function () {
    this.timeout('1s');
    undupe(BIG_ARRAY.input);
  });
});
