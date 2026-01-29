// import functions from inventory.mjs to demostrate adding, removing, and listing items in the inventory

import { addItem, removeItem, listItems } from "./inventory.mjs";

addItem("notebook");
addItem("broken egg");
addItem("epic book");
addItem("baby aligator");

removeItem("broken egg");
removeItem("notebook");

addItem("hollywood trophy");
listItems();
