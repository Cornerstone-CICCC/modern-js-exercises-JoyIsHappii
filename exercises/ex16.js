/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  const cazeArray = Array.isArray(caze) ? caze : [caze];
  
  const precedence = {
    'camel': 1,
    'pascal': 2,
    'snake': 3,
    'kebab': 4,
    'title': 5,
    'vowel': 6,
    'consonant': 7,
    'upper': 8,
    'lower': 9
  };
  
  const sortedCaze = cazeArray.sort((a, b) => precedence[a] - precedence[b]);
  
  let result = input;
  const vowels = 'aeiouAEIOU';
  
  for (const style of sortedCaze) {
    switch(style) {
      case 'camel': {
        const words = result.split(/\s+/);
        result = words[0].toLowerCase() + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
        break;
      }
      case 'pascal': {
        const words = result.split(/\s+/);
        result = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
        break;
      }
      case 'snake':
        result = result.split(/\s+/).join('_').toLowerCase();
        break;
      case 'kebab':
        result = result.split(/\s+/).join('-').toLowerCase();
        break;
      case 'title': {
        const words = result.split(/\s+/);
        result = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        break;
      }
      case 'vowel':
        result = result.split('').map(char => {
          if (vowels.includes(char)) {
            return char.toUpperCase();
          }
          return char.toLowerCase();
        }).join('');
        break;
      case 'consonant':
        result = result.split('').map(char => {
          if (vowels.includes(char.toLowerCase())) {
            return char.toLowerCase();
          } else if (char.match(/[a-z]/i)) {
            return char.toUpperCase();
          }
          return char;
        }).join('');
        break;
      case 'upper':
        result = result.toUpperCase();
        break;
      case 'lower':
        result = result.toLowerCase();
        break;
    }
  }
  
  return result;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;

//done
