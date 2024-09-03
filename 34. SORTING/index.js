// sort: method used to sort elements of an array in place.
// Sorts elements as atrings in lexicographical order, not alphabetically.

let fruits = ['apple', 'orange', 'banana', 'cocunut', 'pineapple'];
fruits.sort();
console.log(fruits);

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort(); // the sort method sorts elements as strings in lexicographical order.
console.log(numbers);

// To sort numbers in ascending order, we can pass a compare function to the sort method.
numbers.sort((a, b) => a - b);
console.log(numbers);

// To sort numbers in descending order, we can pass a compare function to the sort method.
numbers.sort((a, b) => b - a);
console.log(numbers);


const people = [{name: 'Chris', age: 18, },
                {name: 'Ivar', age: 20},
                {name: 'Renato', age: 19},
                {name: 'Dylan', age: 50},];

people.sort((a, b) => a.age - b.age);
console.log(people);

// For strings, we can use the localeCompare method to sort elements in an array.
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
