import { expect } from 'chai';
import { undupe } from '../src/answer';
import { generateData } from './utils/dataGenerator';

const SIZE = 100000;
const BIG_TEST_DATA = generateData(SIZE);

describe('My function', function () {
  it('should remove duplicate emails in a tiny list', function () {
    const source = [
      'one@example.com',
      'two@example.com',
      'one@example.com',
      'three@example.com',
      'three@example.com',
      'two@example.com'
    ];
    const expectedOutput = [
      'one@example.com',
      'two@example.com',
      'three@example.com'
    ];
    const actualOutput = undupe(source);

    expect(actualOutput).to.deep.eq(expectedOutput);
  });

  it('should remove all duplicates from a list of 100,000 emails', function () {
    const actualOutput = undupe(BIG_TEST_DATA.source);

    expect(actualOutput).to.deep.eq(BIG_TEST_DATA.expectedOutput);
  });

  it('should process 100,000 emails in less than 1 sec', function () {
    this.timeout('1s');
    undupe(BIG_TEST_DATA.source);
  });

  it('should return a list with 50% the size of the original list', function () {
    const actualOutput = undupe(BIG_TEST_DATA.source);
    const expectedLength = Math.floor(SIZE / 2);

    expect(actualOutput).to.have.lengthOf(expectedLength);
  });

  it('should preserve the original ordering of emails', function () {
    const source = BIG_TEST_DATA.source;
    const output = undupe(source);
    const sourceSet = new Set(source);
    const outputSet = new Set(output);

    expect(outputSet).to.deep.eq(sourceSet);
  });
});
