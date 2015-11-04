# m-sorted-array [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Implementation of insert, find and remove of sorted array


## Install

```sh
$ npm install --save m-sorted-array
```


## Usage

```js
var SortedArray = require('m-sorted-array');

var SortedArray = require('./lib');
var sortedArray = SortedArray([8, 3, 2, 9, 1]);
console.log(sortedArray.array); // [1, 2, 3, 8, 9]

sortedArray.insert(5);
console.log(sortedArray.array); // [1, 2, 3, 5, 8, 9]

console.log(sortedArray.find(4)); // -1

var strict = false;
console.log(sortedArray.find(4, strict)); // 3

sortedArray.remove(2); // true
sortedArray.remove(2); // false
console.log(sortedArray.array); // [1, 3, 5, 8, 9]
```

## License

Apache-2.0 © [Mieszko4]()


[npm-image]: https://badge.fury.io/js/m-sorted-array.svg
[npm-url]: https://npmjs.org/package/m-sorted-array
[travis-image]: https://travis-ci.org/mieszko4/m-sorted-array.svg?branch=master
[travis-url]: https://travis-ci.org/mieszko4/m-sorted-array
[daviddm-image]: https://david-dm.org/mieszko4/m-sorted-array.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mieszko4/m-sorted-array
[coveralls-image]: https://coveralls.io/repos/mieszko4/m-sorted-array/badge.svg
[coveralls-url]: https://coveralls.io/r/mieszko4/m-sorted-array
