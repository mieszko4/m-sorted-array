export default {
  find: function (array, element) {
    var start = 0;
    var end = array.length;
    while (start !== end) {
      var middle = Math.floor((end - start) / 2) + start;
      var comparatorValue = module.exports.comparatorFunction(element, array[middle]);
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
  },
  insert: function (array, element) {
    if (array.length === 0) {
      array.push(element);
      return;
    }

    var index = module.exports.find(array, element);
    array.splice(index, 0, element);
  },
  comparatorFunction: function (a, b) {
    return a - b;
  },
  sort: function (array) {
    var sortedArray = [];
    array.forEach(function (element) {
      module.exports.insert(sortedArray, element);
    });

    return sortedArray;
  }
};
