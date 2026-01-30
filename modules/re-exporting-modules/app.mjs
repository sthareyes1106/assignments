// imports utilities from the aggregated utils/index.mjs and demonstrates use

import {
  capitalizeWords,
  reverseWords,
  addTwoNums,
  findAvg,
} from "./utils/index.mjs";

console.log(capitalizeWords("wow a sentence"));
console.log(reverseWords("wOwza a wEirD seNteNCe"));

console.log(addTwoNums(3, 76));
console.log(findAvg(4, 6, 1, 2, 9, 76, 23));
