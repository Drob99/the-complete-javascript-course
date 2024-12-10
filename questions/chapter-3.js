// Question 1: Filter out even numbers from array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterEvenNumbersFromArray(arr) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            continue;
        }
        filteredArray.push(arr[i]);
    }
    return filteredArray;
}
console.log(filterEvenNumbersFromArray(array));

// Question 2: Object Manipulation: Write function to find the person with the highest age given an array of objects with names and ages.
const dictionary = [{name: 'Omar', age: 27}, {name: 'Mahmoud', age: 34}, { name: 'Samer', age: 14}, { name: 'Madi', age: 24 }];

function findHighestAge(arr) {
    let oldestPerson = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let newPerson = arr[i];
        if (newPerson.age > oldestPerson) {
            oldestPerson = newPerson;
        }
    }
    return oldestPerson;
}
console.log(findHighestAge(dictionary));

// Question 3: Convert an array of strings containing numbers into an array of actual number values.

let arrayQ3 = ['1', '2', '3', '4', '5', '6', '7'];
let newArrayQ3 = [];
for (let i = 0; i < arrayQ3.length; i++) {
    newArrayQ3.push(Number.parseInt(arrayQ3[i]));
}
console.log(newArrayQ3);

// Question 4: Array Sorting based on a specific property

let arrayQ4 = [{ price: 4.2 }, { price: 8.3 }, { price: 2.2 }];

arrayQ4.sort(function (a, b) {
    return a.price - b.price;
})
console.log(arrayQ4);

// Question 5: Array Manipulation: Write a function that removes the first and last element of a array.

let arrayQ5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function trimArray(array) {
    let modifiedArray = array.slice(1, array.length-1);
    return modifiedArray;
}
console.log(trimArray(arrayQ5));

// Question 6: Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.

let shoppingCart = {
    cheese: {
        quantity: 4,
        price: 8
    },
    milk: {
        quantity: 10,
        price: 4
    }
}

function totalCost(object) {
    let keysInObject = Object.keys(object);
    let totalCost = 0;
    for (let i = 0; i < keysInObject.length; i++) {
        let currentKey = keysInObject[i];
        totalCost +=
            object[currentKey].quantity * object[currentKey].price;   
    }
    return totalCost;
}

console.log(totalCost(shoppingCart));

// Question 7: Object Manipulation: Write a function that deep clones an object to prevent unintended mutation.

let friend = {
    rupert: {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}

function deepClone(obj) {
    //let newObj = obj // This is not a copy. They are referring to the same object

    let newObj = {};
    let objKeys = Object.keys(obj);

    for (let i = 0; i < objKeys.length; i++) {
        let currentKey = objKeys[i];
        newObj[currentKey] = obj[currentKey];
    }
    return newObj;
}

let newFriends = deepClone(friend);

friend.james = {
    hobbies: ['sleep']
}
console.log(newFriends);

// Question 8: Object Iteration: Given an object representing a student's grades, calculate their average grade

let student = {
    chemistry: {
        grade: 9
    },
    physics: {
        grade: 7
    },
    maths: {
        grade: 1
    }
}

function calculateScoreAverage(student) {
    let studentSubjects = Object.keys(student);
    let sumOfGrades = 0;
    let numberOfGrades = studentSubjects.length;
    for (let i = 0; i < studentSubjects.length; i++) {
        let currentSubject = studentSubjects[i];
        let subjectGrade = student[currentSubject].grade;
        sumOfGrades += subjectGrade;
    }
    let average = sumOfGrades / numberOfGrades;
    return average;
}

console.log(calculateScoreAverage(student));

// Question 9: Scope and Closures: Write a function that returns a new function. The returned function should remember and log the number of times it's been called.

function sampleFunction() {
    let timesOfCalling = 0;
    return function () {
        timesOfCalling++;
        console.log(timesOfCalling);
    }
}

const innerFunction = sampleFunction();
innerFunction();
innerFunction();
innerFunction();
innerFunction();
innerFunction();

// Question 10: Array Sorting: Write a function that sorts and array of objects based on a specific property in descending order.

let grades_array = [
    { subject: 'maths', grade: 10 },
    { subject: 'spanish', grade: 2 },
    { subject: 'literature', grade: 6 },
];

function sortbyGrade(array) {
    let sorted_array = array.sort(function (a, b) {
        return b.grade - a.grade;
    })
    return sorted_array;
}
console.log(sortbyGrade(grades_array));
console.log(grades_array);

// Question 11: Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.

let array_of_short_strings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word'];

function filterStringArray(arr) {
    let filtered_array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            filtered_array.push(arr[i]);
        }
    }
    return filtered_array;
}

console.log(filterStringArray(array_of_short_strings));

// Question 13: Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.

let sentence = 'hello world my name is hello, is is, what a great world, my, banana, omar, cool';

function countWordsInString(sentence) {
    let wordList = sentence.match(/\b\w+['-]?\w*\b/g) || [];
    let wordIterations = {};
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i] in wordIterations)
        {
            wordIterations[wordList[i]]++;
        } else {
            wordIterations[wordList[i]] = 1;
        }
    }

    return wordIterations;
}

console.log(countWordsInString(sentence));

