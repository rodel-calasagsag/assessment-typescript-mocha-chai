import { expect } from 'chai';
import { undupe } from '../src/answer';

describe('My answer', () => {
  it('should return [a@m.c, b@m.c] when c@m.c was duplicated', () => {
    const answer = undupe();

    expect(answer).to.eq('Hello World');
  });
});
