let defaultComparatorFunction = function (a, b) {
  return a - b;
};

export default class {
  constructor({
    array: array = [],
    comparatorFunction: comparatorFunction = defaultComparatorFunction
  } = {}) {
    this._comparatorFunction = comparatorFunction;

    this._array = [];
    array.forEach(function (element) {
      this.insert(element);
    }.bind(this));
  }

  find(element) {
    var start = 0;
    var end = this._array.length;

    while (start !== end) {
      var middle = Math.floor((end - start) / 2) + start;
      var comparatorValue = this._comparatorFunction(element, this._array[middle]);
      if (comparatorValue < 0) {
        end = middle;
      } else if (comparatorValue > 0) {
        if (start === middle) {
          start = end;
        } else {
          start = middle + 1;
        }
      } else {
        start = middle;
        end = middle;
      }
    }

    return start;
  }

  insert(element) {
    var index = this.find(element);
    this._array.splice(index, 0, element);
  }

  get array() {
    return this._array;
  }
}
