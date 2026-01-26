/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.

const activateHyperDrive = (/*no parameters*/) => {
  return console.log("Hyperdrive activated!");
};
activateHyperDrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.

const scanForLife = () => console.log("No lifeforms detected");
console.log(scanForLife());

/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.

const currentCoordinates = () => ({ x: 27, y: 32, z: 76 });
console.log(currentCoordinates());

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.

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
 * TODO: Explain here.
 * The message was able to log fine, but the owner wasn't. Arrow functions don't make their own context for `this`, so it returns undefined. It ends up referring to the global (window) object, and not the object it's inside of. Don't use arrow functions and `this` together~
 */
