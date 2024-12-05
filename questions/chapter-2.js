// Question 1
let name = 'Omar';
name += ' Bahaeldin Abdalla';
console.log(name);

// Question 2
let a = 1, b = 2;
console.log(a == b); // value + type -> ===

// Question 3
let age = 20;
if (age > 18) {
    console.log('Adult');
} else {
    console.log('Minor');
}

// Question 4
for (let i = 0; i <= 10; i++) {
    if (!(i % 2)) {
        console.log(i);
    }
}

// Question 5
let array_of_numbers = [1, 2, 13, 26, 32, 45, 21];

let sum = 0;
let i = 0;
while (i < array_of_numbers.length && sum <= 100) {
    sum += array_of_numbers[i];
    i++;
}
console.log(sum);

// Question 6
function calculateArea(width, height) {
    return width * height;
}
console.log('The calaculated area: ', calculateArea(2, 5));

