const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

const firstWater = mythicalCreatures.find(function (creature) {
  return creature.type === "Water";
});
console.log(firstWater);
console.log(`The first creature with a water type is the ${firstWater.name}.`);

const griffinIdx = mythicalCreatures.findIndex(function (creature) {
  return creature.name === "Griffin";
});
console.log(`The Griffin is at index ${griffinIdx}.`);
