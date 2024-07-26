// ctrl + k + c -> comment
// ctrl + F2 -> replace name

let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}

// let name = window.prompt("What is your name?");
// console.log(name);
