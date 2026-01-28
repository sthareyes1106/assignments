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
console.log(firstWater);
console.log(`The first creature with a water type is the ${firstWater.name}.`);

// Using `findIndex` to find the index of the Griffin object
const griffinIdx = mythicalCreatures.findIndex(function (creature) {
  return creature.name === "Griffin";
});
console.log(`The Griffin is at index ${griffinIdx}.`);

// Assuming that the most recently seen creature is at the top...
const lastSeenCreature = mythicalCreatures.find(function () {
  return mythicalCreatures[0];
});

console.log(lastSeenCreature);
console.log(`The last seen creature is the ${lastSeenCreature.name}!`);
