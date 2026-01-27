/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.

// Example participant variables
const name = "Hank";
const age = 45;
const studyField = "Biology";

// Participant object
const participant = {
  name,
  age,
  studyField,
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const newParticipant = {
  ...participant,
  displayInfo() {
    console.log(
      `This participant, ${this.name}, is ${this.age} years old, and works in ${this.studyField}.`,
    );
  },
};

newParticipant.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.

const secondParticipant = {
  ...participant,
  displayInfo: () => {
    console.log(
      `This participant, ${this.name}, is ${this.age} years old, and works in ${this.studyField}.`,
    );
  },
};
secondParticipant.displayInfo();

/*
 * Observations:
 * TODO: Explain here.
 * Arrow functions behave differently in objects; they don't make their own context for `this`... So when the statement prints, the values are blank (for `name`) or undefined (for `age` and `studyField`). It's usually a pretty bad idea to use arrow functions inside of objects.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
