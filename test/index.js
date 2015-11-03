import assert from 'assert';
import sortedArray from '../lib';

describe('m-sorted-array', function () {
  it('should work with empty array', function () {
    let input = [];
    let expectedOutput = [];
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });

  it('should work with one element', function () {
    let input = [1];
    let expectedOutput = [1];
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });

  it('should work with two same elements', function () {
    let input = [7, 7];
    let expectedOutput = [7, 7];
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });

  it('should work with two ascending elements (sorted)', function () {
    let input = [1, 2];
    let expectedOutput = [1, 2];
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });

  it('should work with two descending elements (not sorted)', function () {
    let input = [2, 1];
    let expectedOutput = [1, 2];
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });

  it('should work with three elements (low, high, low)', function () {
    let input = [1, 3, 2];
    let expectedOutput = [1, 2, 3];
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });

  it('should work with three elements (high, low, high)', function () {
    let input = [6, 3, 7];
    let expectedOutput = [3, 6, 7];
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });

  it('should work with large array', function () {
    let input = [1, 7, 4, 2, 0, 9, 7];
    let expectedOutput = [0, 1, 2, 4, 7, 7, 9];
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });

  it('should work with objects array and custom comparator', function () {
    let input = [
      {id: 9},
      {id: 4},
      {id: 3},
      {id: 10}
    ];

    let expectedOutput = [
      {id: 3},
      {id: 4},
      {id: 9},
      {id: 10}
    ];

    sortedArray.comparatorFunction = function (a, b) {
      return a.id - b.id;
    };
    let actualOutput = sortedArray.sort(input);

    assert.deepEqual(expectedOutput, actualOutput);
  });
});
