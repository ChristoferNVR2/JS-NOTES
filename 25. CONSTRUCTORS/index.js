// constuctor: special method for defining the properties and methods of objects

function Car(a, b, c, d){
    this.make = a,
    this.model = b,
    this.year = c,
    this.color = d
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Jac", "JS3", 2021, "red");
const car2 = new Car("Toyota", "Fortuner", 2024, "white");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();
