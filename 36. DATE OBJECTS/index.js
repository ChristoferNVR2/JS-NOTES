// Date objects: objects that contain values that represent dates and times

// Current date and time
const date = new Date();
console.log(date);

//Date(year, month, day, hours, minutes, seconds, milliseconds)
const date1 = new Date(2024, 0, 1, 12, 0, 0, 0);
console.log(date1);

//Date(milliseconds)
const date2 = new Date(0);
console.log(date2);

//Date(dateString)
const date3 = new Date('2024-01-01T12:00:00Z');
console.log(date3);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

// We can also use the setter methods to set the date and time values

console.log(year, month, day, hours, minutes, seconds, dayOfWeek);
