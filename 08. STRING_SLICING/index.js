let fullName = "Chris Vega";

let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6, 10);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstName);  // Chris
console.log(lastName);  // Vega
console.log(firstChar);  // C
console.log(lastChar);  // a

// for more dynamism 

let fstName = fullName.slice(0, fullName.indexOf(" "));
let lstName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(fstName);
console.log(lstName);
