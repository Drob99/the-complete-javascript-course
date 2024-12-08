console.log('hello world');
console.log(4 + 4); //works like a calculator

// Variables
let sentence = 'hi mom';
console.log(sentence);

// Assigning by ref
let number_of_eggs = 8;
let total_groceries = number_of_eggs; // Pass by value
number_of_eggs = 10;
console.log(total_groceries);

// Data Types
// Number: 1212731
// String: 'mom'
// undefined: (intentionally set to nothing)
// boolean: true or false
// object {}: complex data, key value pairs
let friends = {
    omar: 'is super cool',
    lucy: 'isn\'t so cool',
    mom: sentence
}
console.log(friends);

// []: Arrays
let example_array = [1, 2, 3, 4, 5];
console.log(example_array);

// Functions
function myFirstFunction() {
    // output the value of is_true
    console.log(console);
}
myFirstFunction();
console.log(myFirstFunction);

function multiplyNumbers(value, secondValue) {
  console.log(value * secondValue);
}
let multiplyTwoNumbers = multiplyNumbers
multiplyNumbers(3, 5);
multiplyNumbers(4, 9);
multiplyTwoNumbers(7, 5);

// Operators
// +, -, /, *, % (remainder)
// comparison: == (soft equality) > < >= <= != === (checks type equality + ==)

// Logical: && || !
let condition1 = true;
let condition2 = false;

console.log(condition1, condition2); // printing multiple values
console.log(condition1 && condition2); // false
console.log(condition1 || condition2); // true
console.log(!condition2); // true

console.log(!0); // true
console.log(!''); // true

console.log(typeof condition1);

// Control Flow

// Conditions
if (condition1) {
    console.log('hi mom');
} else if (condition1 || condition2) { 
    console.log('One condition was false so here we are.');
} else {
    console.log('The value was false so here we are.');
}

// Loops
let i = 0;
let length = example_array.length;
// console.log(length); // 5
while (i < length) {
    console.log('Value was true', i, example_array[i]);
    i++;
}


for (let j = 0; j < length; j++) {
    if (j % 2 === 0) {
        continue; // skip
        // break; // kill the 
    }
    console.log('Value was true', j, example_array[j]);
}

function addStrings(string1 = 'default1', string2 = 'default2') {
    if (!string1 || !string2) {
        console.log('You are missing an input.');
        return; // exits function
    }

    let concatString = string1 + ' ' + string2;
    console.log(concatString);
    return concatString;
}

let newString = addStrings('hello');
console.log('The new string is: ', newString);
addStrings('hello', 'mum'); // adds Space by default
addStrings('hello'); // Runs !!!

module.exports = {
    addStrings,
    example_array
}

