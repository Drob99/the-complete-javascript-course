// Q1 + Q3

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    calculateArea() {
        return this.width * this.height
    }
}

const rect1 = new Rectangle(5, 10)

// Q2

class Circle {
    constructor(radius) {
        this.radius = radius
    }
}

const circ1 = new Circle(4)

// Q3

console.log(rect1.calculateArea());

// Q4

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    describe() {
        console.log('The name is ' + this.name + ' and the age is ' + this.age);
    }
}

const person1 = new Person('omar', 20)
person1.describe()

// Q5
class Animal {
    constructor(species) {
        this.species = species
    }
}

class Dog extends Animal {
    constructor(species, name) {
        super(species)
        this.name = name
    }
}