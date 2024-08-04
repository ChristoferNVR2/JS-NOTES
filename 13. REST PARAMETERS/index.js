// rest parameters: (...rest)
// bundless separate elements into an array

function openFridge(...fods) {
    console.log(...fods);
}

function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);



function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

function average(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}


const total = sum(1, 2, 3, 4, 5);
const average_ = average(75, 100, 85, 90, 50)

console.log(`Your total is ${total}`);
console.log(`The average is ${average_}`);



function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Chris", "Vega")
console.log(fullName);
