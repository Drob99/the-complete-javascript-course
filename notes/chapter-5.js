const me = {
    name: 'omar',
    age: 27
}

class Person {
    // class body
    constructor(name, age) {
        this.name = name // name is a property of the class
        this.age = age
    }

    greet() {
        console.log('Hello my name is ', this.name)
    }
}

const you = new Person('madi', 24)
const them = new Person('doloris', 31)

console.log(you.age)
them.greet()

class Gamer extends Person {
    constructor(name, age, videogame) {
        super(name, age)
        this.videogame = videogame
    }
}

const nerdyGuy = new Gamer('harold', 31, 'pokemon')
console.log(nerdyGuy)

// getters and setters
class MyClass {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }
}

const obj = new MyClass('lucy')
console.log(obj.name);

obj.name = 'omar'
console.log(obj.name);
