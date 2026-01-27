/* Task 1: Unveiling the Coordinates */
const coordinates = { x: 34, y: 42, z: 67 };

const { x, y } = coordinates;
console.log(`coordinate x is ${x} and coordinate y is ${y}`);

/* Task 2: The Map of Secrets */
const locations = {
  first: "Cave of Wonders",
  second: "Lake of Mystery",
  third: "Mount of Ages",
  fourth: "Desert of Shadows",
};

const { first, second, ...remaining } = locations;
console.log(`Key locations: "${first}" and "${second}"`);
// console.log(remaining)

/* Task 3: The Mysterious Door */
const doorCode = {
  upper: "Alpha",
  lower: "Omega",
};

const { upper, middle = remaining.third, lower } = doorCode;
console.log(`The door code is: ${upper}, ${middle}, ${lower}`);

/* Task 4: The Guardian's Riddle */
const riddle = {
  ancientWord: "Sphinx",
  modernWord: "Cat",
};

const { ancientWord: translation } = riddle;
console.log(`The translation is ${translation}.`);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];

const [firstEl, secondEl] = elements;
console.log(`The essential elements are ${firstEl} and ${secondEl}.`);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];

const [stone1, , , , , stone6] = stones;
console.log(`Skipped stones: ${stone1}, ${stone6}`);

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];

const [visible, ...hidden] = shadows;
console.log(`The visible shadow: ${visible}`);
console.log(`The hidden shadows: ${hidden}`);

/* Task 8: The Wise Function */

// Not exactly sure how to test this one out.
function revealPath({ direction, distance }) {
  (direction, distance);
  console.log(`Move ${distance} toward ${direction}`);
}

/* Task 9: The Scroll of Defaults */

function mixPotion({ ingredient1 = "Water", ingredient2 = "Fireflower" } = {}) {
  console.log(`Ingredient 1 = ${ingredient1}, Ingredient 2 = ${ingredient2}`);
}
mixPotion({ ingredient1: "Wolfsbane" });

/* Task 10: The Array Spell */

function castSpell([ingredient1, ingredient2]) {
  console.log(`Casting spell with ${ingredient1} and ${ingredient2}.`);
}
castSpell(["Nightshade", "some dirt"]);

/* Task 11: The Nested Secret */
const nestedSecret = { outer: { inner: "The Final Key" } };

const {
  outer: { inner },
} = nestedSecret;
console.log(`This is the unveiled secret: ${inner}`);

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
[stoneA, stoneB] = [stoneB, stoneA];
console.log(`After the swap, stone A is ${stoneA}, and stone B is ${stoneB}.`);
