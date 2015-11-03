import assert from 'assert';
import SortedArray from '../lib';

describe('m-sorted-array', function () {
  it('should insert elements in array', function () {
    let expectedOutput = [3, 6, 7];

    let sortedArray = new SortedArray();
    sortedArray.insert(6);
    sortedArray.insert(3);
    sortedArray.insert(7);

    assert.deepEqual(sortedArray.array, expectedOutput);
  });

  it('should find element in array', function () {
    let input = [1, 7, 4, 2, 0, 9, 7];
    let expectedOutput = [0, 1, 2, 4, 7, 7, 9];
    let sortedArray = new SortedArray({array: input});

    assert.deepEqual(sortedArray.array, expectedOutput);

    assert.equal(sortedArray.find(4), 3);
    assert.equal(sortedArray.find(5), -1);
    assert.equal(sortedArray.find(5, false), 4);
  });

  it('should work with empty array', function () {
    let input = [];
    let expectedOutput = [];
    let actualOutput = new SortedArray({array: input}).array;

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should work with one element', function () {
    let input = [1];
    let expectedOutput = [1];
    let actualOutput = new SortedArray({array: input}).array;

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should work with two same elements', function () {
    let input = [7, 7];
    let expectedOutput = [7, 7];
    let actualOutput = new SortedArray({array: input}).array;

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should work with two ascending elements (sorted)', function () {
    let input = [1, 2];
    let expectedOutput = [1, 2];
    let actualOutput = new SortedArray({array: input}).array;

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should work with two descending elements (not sorted)', function () {
    let input = [2, 1];
    let expectedOutput = [1, 2];
    let actualOutput = new SortedArray({array: input}).array;

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should work with three elements (low, high, low)', function () {
    let input = [1, 3, 2];
    let expectedOutput = [1, 2, 3];
    let actualOutput = new SortedArray({array: input}).array;

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should work with three elements (high, low, high)', function () {
    let input = [6, 3, 7];
    let expectedOutput = [3, 6, 7];
    let actualOutput = new SortedArray({array: input}).array;

    assert.deepEqual(actualOutput, expectedOutput);
  });

  it('should work with large array', function () {
    let input = [1, 7, 4, 2, 0, 9, 7];
    let expectedOutput = [0, 1, 2, 4, 7, 7, 9];
    let actualOutput = new SortedArray({array: input}).array;

    assert.deepEqual(actualOutput, expectedOutput);
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

    let actualOutput = new SortedArray({
      array: input,
      comparatorFunction: function (a, b) {
        return a.id - b.id;
      }
    }).array;

    assert.deepEqual(actualOutput, expectedOutput);
  });
});
