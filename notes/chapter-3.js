// data manipulation

const { addStrings, example_array } = require("./chapter-2"); // destructuring syntax

// strings
let example_sentence = 'this is a string';

let string_length = example_sentence.length;

console.log('Value at the end of the string = ', example_sentence[string_length]); // undefined

console.log('Value at the end of the string = ', example_sentence[string_length - 1]); // g

let combined_string = 'hello world' + ' ' + 'my name is omar';

console.log('3' + 5); // 35 (typeof = string)
console.log('3' + 5 - 6); // 29 (typeof = number)

const contains_the_letter_a = example_sentence.indexOf('a');
console.log('sentence contains the letter "a"? ', contains_the_letter_a);

const split_sentence = example_sentence.split(' '); // it removes the regex and splits the rest
console.log(split_sentence);

const split_sentence_2 = example_sentence.split(''); // split everywhere
console.log(split_sentence_2);

console.log(example_sentence.includes('z')); // false

console.log(example_sentence.replaceAll(' ', '_'));

console.log(example_sentence.slice(5));

// regex
// Using ChatGPT

// arrays and lists
let simple_array = ['omar', 'is', 'cool'];

// crud - create read update delete
console.log(simple_array[1]);

simple_array[1] = 'hello';
console.log(simple_array);

// pop push shift unshift
simple_array.push('new_word');
console.log(simple_array);

simple_array.pop(); // returns it
console.log(simple_array);

console.log(simple_array.includes('omar'));
console.log(simple_array.indexOf('omar'));
console.log(simple_array.join(' '));
console.log(simple_array.reverse());
console.log(simple_array.sort()); // modifies the original array

let array = [[1, 2], [3, 4]];
for (let i = 0; i < array.length; i++) {
    let subArray = array[i];
    for (let j = 0; j < subArray.length; j++) {
        console.log(i, j, array[i][j]);
    }
}

array = [1, 2, 3, 4, 5];

let start_array = array.slice(0, 2);
let end_array = array.slice(3);

let new_filtered_array = start_array.concat(end_array);
console.log(new_filtered_array);

// dictionaries or objects
const bio = {
    name: 'omar',
    age: 20,
    hobbies_or_interest: ['gym', 'coding', 'chess'],
    friends: {
        'juan': {
            description: 'good at maths'
        }
    }
}
console.log(bio);

// access as string because it could refer to a variable
console.log( bio['name']);

let name_key = 'name';
console.log(bio[name_key]);

bio['number_of_friends'] = 0;
console.log(bio);

console.log('age' in bio);

bio.number_of_friends++;
console.log(bio);

delete bio.number_of_friends;
console.log(bio);

// nested dictionaries
bio.friends.juan.description = 'bad at maths';
console.log(bio['friends']['juan']['description']);

const keys_in_object = Object.keys(bio);
console.log(keys_in_object);

const values_in_object = Object.values(bio);
console.log(values_in_object);
const entries_in_object = Object.entries(bio);
console.log(entries_in_object);

///* Part 2: Scopes, closures, modular code, and error handling
function helloWorld() {
    let sentence = 'hello world';
    console.log(sentence);
}

// Closures
function counter() {
    let count = 0;
    console.log("Outer function: ", count);
    // anonymous function
    return function () {
        count++;
        console.log('Inner function: ', count);
    }
}
let increment = counter(); // increment is the inner function
increment();
increment();

// Modular

addStrings('hello', 'world');
console.log(example_array);

// Error handling techniques & Debugging
const brokenObject = {
    word : 'nice'
}

// The code below is not problematic as it seems :-)
// function problematicCodeBlock() {
//     const calculation = 100 / 0; // even 100 / null is infinity
//     console.log(calculation);
// }

function problematicCodeBlock() {
    try {
        const sub_object = brokenObject.hello.world; // Equivalent to Undefined.world
        console.log(sub_object);
    } catch (err) {
        console.error(err.message); // cleaner than err
    }
}

problematicCodeBlock();
console.log('code continued to execute');

function throwError() {
    try {
        throw new Error('custom error message');
    } catch (err) {
        console.log(err.message);
    }
}

throwError();