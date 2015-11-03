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

  find(element, strict = true) {
    var start = 0;
    var end = this._array.length;

    while (start !== end) {
      var middle = Math.floor((end - start) / 2) + start;
      var comparatorValue = this._comparatorFunction(element, this._array[middle]);
      if (!strict && comparatorValue < 0) {
        end = middle;
      } else if (!strict && comparatorValue > 0) {
        if (start === middle) {
          start = end;
        } else {
          start = middle + 1;
        }
      } else if (comparatorValue === 0) {
        start = middle;
        end = middle;
      } else {
        return -1;
      }
    }

    return start;
  }

  insert(element) {
    var index = this.find(element, false);
    this._array.splice(index, 0, element);
  }

  get array() {
    return this._array;
  }
}
