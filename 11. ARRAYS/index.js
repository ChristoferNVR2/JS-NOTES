let fruits = ['apple', 'orange', 'banana'];

fruits.push('coconut');
fruits.pop();
fruits.unshift('mango');  // add at the beggining
fruits.shift();  // remove from the beggining

console.log(fruits);

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf('orange');
console.log(index);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
    
}

fruits.sort();
fruits.sort().reverse();


// range based loop
for (let fruit of fruits) {
    console.log(fruit);
    
}
