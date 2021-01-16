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
    const input = ['b@mail.com', 'a@mail.com', 'b@mail.com'];
    const expected = ['b@mail.com', 'a@mail.com'];
    const actual = undupe(input);

    expect(actual).to.deep.eq(expected);
  });

  it('should remove duplicate emails in a big array', function () {
    const actual = undupe(BIG_ARRAY.input);

    expect(actual).to.deep.eq(BIG_ARRAY.answer);
  });

  it('should return an answer in under 1 sec', function () {
    this.timeout('1s');
    undupe(BIG_ARRAY.input);
  });
});
