import assert from 'assert';
import sortedArray from '../lib';

describe('m-sorted-array', function () {
  it('should work with empty array', function () {
    let input = [1, 7, 4, 2, 0, 9, 7];
    let expectedOutput = [0, 1, 2, 4, 7, 7, 9];
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });
});
