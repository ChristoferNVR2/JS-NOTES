let username = "ChrisVega   ";

console.log(username.charAt(0));
console.log(username.indexOf("V"));  // first appearance
console.log(username.lastIndexOf("V"));  // last appearance
console.log(username.length);  // output: 12
username = username.trim();  // deletes blanks after or before
console.log(username.length);  // output: 9
console.log(username);
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.repeat(3));
console.log(username.startsWith(" "));  // boolean
console.log(username.endsWith("a"));  // boolean

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

let randomString = "some-text";
console.log(randomString.padStart(15, "0"));
console.log(randomString.padEnd(15, "0"));
