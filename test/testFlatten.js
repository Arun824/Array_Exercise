const flattenJs = require("./../flattenJs.js");

const nestedArray = [1, [2], [[3]], [[[4]]]];

console.log(flattenJs(nestedArray));