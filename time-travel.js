/* Task 1: Declare a Destination Variable */
let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
const travelDate = "2024-03-15";
console.log(travelDate);

// travelDate = "2025-01-26";

/*
 * Observations:
 * I got a type error. I can't reassign a constant variable.
 */

/* Task 4: Experiment with Variable Hoisting */
console.log(timeMachineModel);
var timeMachineModel = "T-800";

/*
 * Observations:
 * Initially, I got a reference error, since timeMachineModel wasn't defined. Once I defined it with `var`, it printed out `undefined`. When using `var`, the declaration of the variable is "moved to the top" of the doc, so the variable "exists" but without a value (hence the undefined value). Not sure if that made any sense.
 */
