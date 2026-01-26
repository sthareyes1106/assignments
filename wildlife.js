/* Task 1: Track Animal Sightings */
// I think this is what I'm supposed to do...
function animalSightings(...animals) {
  console.log(animals);
}
animalSightings("a", "b", "c", "d", "e", "f", "g");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];

const protectedHabitats = [...forestHabitats, ...savannahHabitats];
console.log(protectedHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};

// I'm just gonna make a copy of this...
const rhinoStatusUpdate = {
  ...rhinoStatus,
  population: 450,
  habitat: "The Moon",
};
// console.log(rhinoStatus);
console.log(rhinoStatusUpdate);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};

const lionProfile2 = { ...lionProfile, genetics: "Who knows!" };
// console.log(lionProfile);
console.log(lionProfile2);
/*
 * Observations:
 * In this case, when the copy is edited, only the copy is affected. The original profile remains the same.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};

const ecoSystemHealthUpdate = {
  ...ecosystemHealth,
};
// Updating the nested property of 'carnivores'
ecoSystemHealthUpdate.foodSupply.carnivores =
  "Lacking. They're eating the herbivores.";
console.log(ecoSystemHealthUpdate);
console.log(ecosystemHealth);

/*
 * Observations:
 * Modifying a nested property in the copy affects the same property in the original object. When making copies using the spread operator, it only makes a shallow copy; anything deeper than that (nested properties) have the same reference.
 */
