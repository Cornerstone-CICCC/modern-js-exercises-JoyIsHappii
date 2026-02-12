/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  let wordSplited = input.split(" ");
  //console.log (wordSplited)
  // console.log (wordSplited[0][0].toUpperCase()]) -> wordSplited[0]= one word -> wordSplited[0][0]=the first letter
  for (let i=1; i<wordSplited.length; i++) {
    wordSplited[i]= wordSplited[i][0].toUpperCase() + wordSplited[i].slice(1) //slice(indexStart) or slice(indexStart, indexEnd)
  }
  //console.log(wordSplited)
  return wordSplited.join("")
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;


//done
