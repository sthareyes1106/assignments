const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];

const updatedUsers = users.map(function (user) {
  return {
    // Add first and last names together
    fullName: user.firstName + " " + user.lastName,
    //Create membership status using ternary operator
    membershipStatus: user.points > 100 ? "Premium" : "Standard",
  };
});

console.log(updatedUsers);
