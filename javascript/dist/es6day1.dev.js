"use strict";

var arr = [9.7, 6.4, 3.8, 2.9, 6.8];
var res = arr.map(function (result) {
  return Math.round(result);
});
console.log(res);
var sum = res.reduce(function (total, a) {
  return total + a;
}, 0);
console.log(sum);
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var filter = arr1.filter(function (number) {
  return number > 5;
});
console.log(filter);
console.log(filter[0]);