class Person {
    constructor(name, age, ...adress) {
        this.name = name;
        this.age = age;
        this.adress = new Adress(...adress);
    }
}

class Adress {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person('Chris', 18, '666 Main St', 'Trujillo', 'Peru');
const person2 = new Person('Hendy', 18, '123 Main St', 'Trujillo', 'Peru');
const person3 = new Person('Giovanny', 18, '456 Main St', 'Trujillo', 'Peru');

for (const property in person1) {
    if (person1[property] instanceof Adress) {
        for (const adressProperty in person1[property]) {
            console.log(`${adressProperty}: ${person1[property][adressProperty]}`);
        }
    } else {
        console.log(`${property}: ${person1[property]}`);
    }
}
