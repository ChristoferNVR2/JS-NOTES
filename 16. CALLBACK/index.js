// callback: function that is passed as an argument to another function

// hello();
// goodbye();

// this function will take 3 seconds to execute, however, goodbye will be executed first
// function hello() {
//     setTimeout(function () {
//         console.log("Hello");
//     }, 3000);
// }

// with a callback you ensure that the function passed as an argument will be executed next
// informalLy, "when you're done, call this next"
hello(goodbye);

function hello(callback) {
    console.log("Hello");
    callback();
}

function goodbye() {
    console.log("Goodbye");
}
