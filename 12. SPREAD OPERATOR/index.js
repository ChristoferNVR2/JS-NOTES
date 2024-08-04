// spread operator: ...
// unpack an iterable

let numbers = [1, 2, 3, 4, 5]
let maximun = Math.max(...numbers)
let minimum = Math.min(...numbers)


console.log(maximun);
console.log(minimum);

let username = "Chris Vega";
let letters = [...username];

console.log(letters);

let letters2 = [...username].join("-");
console.log(letters2);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(fruits);
console.log(foods);

