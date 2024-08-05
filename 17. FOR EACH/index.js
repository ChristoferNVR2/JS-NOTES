// forEach(): method used to iterate over the elements of an array and apply a function (callback) to each element
// forEach provides element, index and array to the callback

let numbers = [1, 2, 3, 4, 5]

numbers.forEach(double);
numbers.forEach(display)

function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
    
}



let fruits = ['apple', 'orange', 'banana', 'coconut'];

fruits.forEach(upperCase);
fruits.forEach(lowerCase);
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}
