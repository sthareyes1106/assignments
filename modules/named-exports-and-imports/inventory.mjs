// Wow these function are significantly simpler than the solution code's!

export const inventory = [];

// addItem: adds an item by name to the inventory array
export function addItem(item) {
  inventory.push(item);
}

// removeItem: remove an item by name from the inventory array

export function removeItem(item) {
  const index = inventory.indexOf(item);
  inventory.splice(index, 1);
}

// listItems: logs all item names currently in the inventory
export function listItems() {
  console.log(inventory);
}
