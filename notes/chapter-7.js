// const express = require('express')
import {Express} from "express" // destructuring

// arrow functions

function myFunction(input) {
    // code that is repeatable
}

const myFunction2 = (input) => { console.log('Executed function') }

// Ternary operator ?

let friends = ['caroline', 'elena', 'bonnie']

let isBonnieFriend = friends.includes('bonnie') ? true : false; 

// if (friends.includes('bonnie')) {
//     isBonnieFriend = true
// } else {
//     isBonnieFriend = false
// }

console.log(isBonnieFriend);

// Optional Chaining

const omar = {
    hobbies: {
        skiing: {
            pairs_of_skis: 1
        }
    }
}

console.log(omar?.hobbies?.football?.pairs_of_boots); // returns undefined instead of error
console.log(omar?.['hobbies']?.['football']?.['pairs_of_boots']);

// object destructuring

let person = {
    name: 'omar',
    age: 20
}

const {name: person_name, age} = person // from object, access the name and age vars and assign them as vars

console.log(person_name, age);

// Array destructuring

let oldArray = [4, 5]

let [value1, value2] = oldArray

// template literal string

let my_name = 'omar'
console.log(`hello my name is ${my_name} and I like the fraction 3/8 which has a decimal value of ${3 / 8}`);

// short circuits && ||

/// AND &&
let person_dict = { name: 'klaus' }
let person_name_2 = person_dict.name && 'omar'

let person_name_3 = person_dict.name || 'default name'

// enhanced object literals

let breed = 'corgi'
let animal = 'dog'

const animal_info = {
    breed,
    animal
}

// spread operator

let demo_array = [1, 2, 3, 4, 5]
let demo_array_2 = [...demo_array, 6, 7]

let demo_object = {
    favorite_color: 'blue'
}

let demo_object_2 = {
    ...demo_object,
    favorite_food: 'cookies and cream ice cream' 
}

let new_object = {
    ...demo_object
}

// array methods

let my_cool_array = [8, 3, 93, 3, 123, 2, 34, 5, 6, 6]

/// for each

my_cool_array.forEach((current_value, current_index) => {
    console.log(`The current value is: ${current_value} & the current index is ${current_index}.`);
})

/// map


let my_new_array = my_cool_array.map((current_value, current_index) => {
    return current_value * 2
});

console.log(my_new_array);

/// filter

let filtered_array = my_cool_array.filter((current_value, current_index) => {
    let is_even = current_value % 2 === 0
    return is_even 
})

console.log(filtered_array);

// reduce (build from scratch)
let reduced_array = my_cool_array.reduce((accumulator, current_value, current_index) => {
    console.log(`ACCUMULATOR: ${accumulator}\nCURRENT_VALUE: ${current_value}\nCURRENT_INDEX: ${current_index}`);
    return accumulator + `,${current_index}:${current_value}`
}, '')
console.log(reduced_array);


