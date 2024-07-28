const MIN = 1;
const MAX = 100
const awnser = Math.floor(Math.random() * MAX - MIN + 1) + MIN;

let attempts = 0;
let guess;
let running = true;

while(running) {

    guess = window.prompt(`Guess a number between ${MIN} - ${MAX}`);
    guess = Number(guess);
    
    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if(guess < MIN || guess > MAX) {
        window.alert("Please enter a valid number");
    } else {
        attempts++;
        if (guess < awnser) {
            window.alert("Too LOW, try again");
        } else if(guess > awnser) {
            window.alert("Too HIGH, try again");
            
        } else {
            window.alert(`CORRECT, THE AWNSER WAS ${awnser}. IT TOOK YOU ${attempts} ATTEMPTS`);
            running = false;
        }
    }
}
