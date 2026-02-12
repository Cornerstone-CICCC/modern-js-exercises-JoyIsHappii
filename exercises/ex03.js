/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) { //use array.include, for loop
    let sum =0;
    const vowels = ["a","e","i","o","u"];
    for (let i=0; i<data.length; i++) {
        if (vowels.includes(data[i])) {
            sum++;
        }
    } return sum;
        /* for (let i=0; i<data.length; i++) {
            if (data[i].includes("a")) {
                sum += 1;
            } if (data[i].includes("e")) {
                sum += 1;
            } if (data[i].includes("i")) {
                sum += 1;
            } if (data[i].includes("o")) {
                sum += 1;
            } if (data[i].includes("u")) {
                sum += 1;
            } */
    }

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;

//done