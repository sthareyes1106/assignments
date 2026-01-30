// for numeric operations
// add two numbers together
function addTwoNums(x, y) {
  return x + y;
}

// find average
function findAvg(...nums) {
  // add all nums together
  const total = nums.reduce(
    (accumulator, currentNum) => accumulator + currentNum,
  );
  return total / nums.length;
}
