/* Task 1: Compile Participant Details with Shorthand Property Names */

// Example participant variables
const name = "Hank";
const age = 45;
const studyField = "Biology";

// Starting participant object utilizing object shorthand
const participant = {
  name,
  age,
  studyField,
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// Created copy object with displayInfo method

const newParticipant = {
  ...participant,
  displayInfo() {
    console.log(
      `This participant, ${this.name}, is ${this.age} years old, and works in ${this.studyField}.`,
    );
  },
};
// Testing displayInfo method
newParticipant.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// Created another object which mimcs the first, but using an arrow function

const secondParticipant = {
  ...participant,
  displayInfo: () => {
    console.log(
      `This participant, ${this.name}, is ${this.age} years old, and works in ${this.studyField}.`,
    );
  },
};

// Testing displayInfo method when using an arrow function
secondParticipant.displayInfo();

/*
 * Observations:
 * Arrow functions behave differently in objects; they don't make their own context for `this`... So when the statement prints, the values are blank (for `name`) or undefined (for `age` and `studyField`). It's usually a pretty bad idea to use arrow functions inside of objects.
 */

/* Task 4: Using Computed Property Names */
// Added a function to update a dynamic property and value, which returns the updated object

function updateParticipantInfo(propName, val, obj) {
  const updatedObj = {
    ...obj,
    [propName]: val,
  };

  return updatedObj;
}

// Checking the returned object to make sure all is well
console.log(updateParticipantInfo("name", "Hank Green", participant));
