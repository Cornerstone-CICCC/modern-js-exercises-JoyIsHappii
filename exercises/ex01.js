/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function (data) { //array,sum -> find 2 largest number and sum
  function sorted (a,b) {
    if (a<b) {
      return -1;
    } else if (a>b) {
      return 1;
    }
  }
  data.sort (sorted)
  //console.log(data)
  let last = data[data.length-1];
  let second = data[data.length-2]
  return last + second;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;


//done
