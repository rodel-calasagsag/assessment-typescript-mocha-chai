import { expect } from 'chai';
import { undupe } from '../src/answer';
import { generateList } from './utils/dataGenerator';

const SIZE = 100000;
const BIG_ARRAY = generateList(SIZE);

describe('My function', function () {
  it('should remove duplicate emails in a tiny list', function () {
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

  it('should remove all duplicates from a list of 100,000 emails', function () {
    const actual = undupe(BIG_ARRAY.input);

    expect(actual).to.deep.eq(BIG_ARRAY.expectedOutput);
  });

  it('should process 100,000 emails in less than 1 sec', function () {
    this.timeout('1s');
    undupe(BIG_ARRAY.input);
  });

  it('should return a list with 50% the size of the original list', function () {
    const actual = undupe(BIG_ARRAY.input);

    expect(actual).to.have.lengthOf(Math.floor(SIZE / 2));
  });

  it('should preserve the original ordering of emails', function () {
    this.timeout('10s'); // todo remove this
    const input = BIG_ARRAY.input;
    const output = undupe(input);
    const outputLength = output.length;

    // todo optimize this. currently taking 8s to complete
    for (let i = 0; i < outputLength - 1; i++) {
      const currentOutput = output[i];
      const nextOutput = output[i + 1];

      expect(input.indexOf(currentOutput)).to.be.lessThan(
        input.indexOf(nextOutput)
      );
    }
  });
});
