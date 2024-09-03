const fruits = [{name: 'apple', color: 'red', calories: 95}, 
                {name: 'orange', color: 'orange', calories: 45}, 
                {name: 'banana', color: 'yellow', calories: 105}, 
                {name: 'coconut', color: 'brown', calories: 159}, 
                {name: 'pineapple', color: 'yellow', calories: 37},];

fruits.push({name: 'grape', color: 'purple', calories: 62});

console.log(fruits);


fruits.forEach(fruit => console.log(fruit));

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);


console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);


const yellowFruits = fruits.filter(fruit => fruit.color === 'yellow');
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);


const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

console.log(maxFruit);


const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);

console.log(minFruit);

