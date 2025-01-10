// Q1

let name = 'omar'
let special_string = `hello my name is ${name}`
console.log(special_string);

// Q2
let add = (a, b) => { return a + b }
console.log(add(2, 4));

// Q3
const person = { name: 'omar', age: 20 }

const { name: person_name, age } = person
console.log(person_name, age);

// Q4
const colors_array = ['red', 'blue', 'green']
const [first, second, third] = colors_array
console.log(first, second, third);

// Q5
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let combined_array = [...arr1, ...arr2]
console.log(combined_array);

// Q6
let obj1 = { name: 'elijah', age: 14 }
let obj2 = { name: 'klaus', color: 'blue' }

let combined_object = { ...obj1, ...obj2 }
console.log(combined_object);

// Q7
const user = {name: 'omar'}
console.log(user?.address?.street);

// Q8
const greet = (name, greeting = "Hello") => { console.log(`${greeting} ${name}`); }
greet('madi')

// Q9
// let is when the value assigned could change, const is when never changed

// Q10
let new_arr = [1, 2, 3, 4]
// new_arr.forEach((curr_value, curr_index) => {
//     console.log(curr_value);
// })

for (let curr_value of new_arr) {
    console.log(curr_value);
}

// Q11
let original_array = [2, 4, 5, 6, 8, 93]
let squared_array = original_array.map((curr_value, curr_index) => {
    return curr_value * curr_value
})
console.log(squared_array);

// Q12
let ageStatus = age >= 18 ? 'adult' : 'minor'
console.log(ageStatus);

// Q13
const logMessage = () => { console.log('logged in'); }

let isLoggedIn = true

isLoggedIn && logMessage()

// Q14
let username = user.name || 'guest'


