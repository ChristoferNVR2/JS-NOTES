// nested objects: Objects inside of other objects
// allows you to represent more complex data structures
// child Object is enclosed by a Parent Object

// Person{Adress{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: 'Chris Vega',
    age: 18,
    isStudent: true,
    hobbies: ['coding', 'listening to music', 'playing guitar'],
    address: {
        street: '123 Main St',
        city: 'Trujillo',
        country: 'Peru',
    },
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
console.log(person.hobbies);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);
console.log(person.address);

for (const property in person.address) {
    console.log(`${property}: ${person.address[property]}`);
}
