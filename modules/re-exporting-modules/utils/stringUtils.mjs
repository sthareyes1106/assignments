// do 1-2 functions for string manipulation
// to capitalize words
function capitalizeWords(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// to reverse words in a sentence because why not
// similar to capitalizeWords above
function reverseWords(sentence) {
  return sentence
    .split(" ") // make into array
    .map((word) => word.split("").reverse().join("")) // reverse letters
    .join(" "); // join into array
}
