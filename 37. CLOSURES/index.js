// closure: a function defined inside of another function, the inner function has access to the outer function's variables and scope
// Allow for private variables and  state maintenance
// Used frequently in JS frameworks like React, Angular, Vue, and Node.js

function outer() {
    let message = 'Hello';
    function inner() {
        console.log(message);
    }

    inner();
}

outer();


// function increment() {
//     let count = 0;
//     count++;
//     console.log(`Count increased to ${count}`);
// }

// increment(); 
// it will always log 1 because count is redefined every time the function is called

// letting count outside of the function will allow it to be incremented
// however, it will not be private and can be accessed and changed from outside the function

// Using a closure will allow for a private variable that can be incremented

function createCounter() {
    let count = 0;
    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        getCount
    }
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is  ${counter.getCount()}`);


// Keeping track of a score in a game
// score is not secure and can be changed from outside the function

// let score = 0;

// function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts`);
// }

// function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts`);
// }

// function getScore() {
//     return score;
// }

// increaseScore(5);
// increaseScore(6);
// decreaseScore(3);
// console.log(`The final score is ${getScore()}`);


// Using a closure to keep score private

function createGame() {

    let score = 0;
    
    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore() {
        return score;
    }

    return {
        increaseScore,
        decreaseScore,
        getScore
    }
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}`);
