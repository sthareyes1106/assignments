export const inventory = [];

// addItem: adds an item by name to the inventory array
export function addItem(item) {
  inventory.push(item);
}

// removeItem: remove an item by name from the inventory array

export function removeItem(item) {
  index = inventory.indexOf(item);
  inventory.splice(index, index + 1);
}

// listItems: logs all item names currently in the inventory
export function listItems() {
  console.log(inventory);
}
