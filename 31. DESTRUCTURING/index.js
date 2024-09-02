// destructuring: extract values from arrays and objects and assign them to variables in a convenient way
// [] to perform array destructuring
// {} to perform object destructuring

// Swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Swap two elements in an array

const colors1 = ['red', 'blue', 'green', 'yellow'];

[colors1[0], colors1[3]] = [colors1[3], colors1[0]];

console.log(colors1);

// Assign array elements to variables

const colors2 = ['red', 'green', 'blue', 'black', 'white'];

const [color1, color2, color3, ...extraColors] = colors2;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(extraColors); // a new array with the remaining elements

// Extract values from an object

const person1 = {
    firstName: 'Chris',
    lastName: 'Vega',
    age: 18,
}

const person2 = {
    firstName: 'Yensi',
    lastName: 'Vega',
    age: 44,
    job: 'developer'
}

const {firstName, lastName, age, job='Unemployed'} = person2;
// if the property does not exist, it will assign the default value

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// Destructure in function parameters

function displayPerson({firstName, lastName, age, job='Unemployed'}) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1);
