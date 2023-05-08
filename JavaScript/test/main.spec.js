import { testMe } from '../src/testMe.js';

describe('Test', () => {
  it('testMe()', () => {
    // act
    const result = testMe();

    // assert
    expect(result).toEqual(100);
  })
});
