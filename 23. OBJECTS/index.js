// object: a collection of properties and/or methods
// object = {key:value,
//           function()}

const person1 = {
    firstName: "Chris",
    lastName: "Vega",
    age: 18,
    isEmployed: false,
    sayHello: function() {console.log("Hi! I'm Chris")},
    eat: () => console.log("I'm eating pizza"),
}

const person2 = {
    firstName: "Yensi",
    lastName: "Vega",
    age: 44,
    isEmployed: true,
    sayHello: () => console.log("Hi! I'm Yensi"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person2.sayHello();
