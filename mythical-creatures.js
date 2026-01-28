const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

// Using `find` to find the first water-type creature
const firstWater = mythicalCreatures.find(function (creature) {
  return creature.type === "Water";
});
console.log(`The first creature with a water type is the ${firstWater.name}.`);

// Using `findIndex` to find the index of the Griffin object
const griffinIdx = mythicalCreatures.findIndex(function (creature) {
  return creature.name === "Griffin";
});
console.log(`The Griffin is at index ${griffinIdx}.`);

// Using `find` to find the first creature seen in the enchanted forest
const enchantedForestSighting = mythicalCreatures.find(function (creature) {
  return creature.lastSeen === "Enchanted Forest";
});

// console.log(enchantedForestSighting);
console.log(
  `The first creature last seen in the Enchanted Forest is the ${enchantedForestSighting.name}!`,
);
