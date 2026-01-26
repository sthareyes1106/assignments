/* Task 1: No Parameters: Activate Hyperdrive */
const activateHyperDrive = () => {
  return console.log("Hyperdrive activated!");
};
activateHyperDrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
const scanForLife = () => console.log("No lifeforms detected");
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
const currentCoordinates = () => ({ x: 27, y: 32, z: 76 });
console.log(currentCoordinates());

/* Task 4: Understanding `this`: Message from Home Base */
const spacecraft = {
  Owner: "Star-Lord",
  receiveMessage: (message) => {
    (console.log(`Message received: ${message}`),
      console.log(`This ship's owner is ${this.Owner}`));
  },
};
spacecraft.receiveMessage("Anyone out there?");

/*
 * Observations:
 * The message was able to log fine, but the owner wasn't. Arrow functions don't make their own context for `this`, so it returns undefined. It ends up referring to the global (window) object, and not the object it's inside of. Don't use arrow functions and `this` together~
 */
