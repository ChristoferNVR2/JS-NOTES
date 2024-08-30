// this: referencia to the object where "this" is used
// person.name = this.name

// "this" doesn't work with an arrow function

const person = {
    name: "Chris Vega",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi, I'm ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)} 
}

person.sayHello();
person.eat();
