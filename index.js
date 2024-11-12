const dateInfo = document.getElementById("date-info");
const timeInfo = document.getElementById("time-info");
const stringRepresentation = document.getElementById("string-representation");

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function setDate() {
    const date = new Date();
    dateInfo.textContent = date.toLocaleDateString();
    timeInfo.textContent = date.toLocaleTimeString();
    stringRepresentation.textContent = getStringRepresentation(date);
}

function getStringRepresentation(date) {
    const monthNumber = date.getMonth();
    const dayNumber = date.getDay();
    const month = months[monthNumber];
    const day = weekDays[dayNumber];
    return month + " " + day;
}

setInterval(setDate, 1000);


// Masalalar

// 1

{
    function greeting(name) {
        return `Assalomu alaykum, ${name}`;
      }
      
      console.log(greeting("John")); // "Assalomu alaykum, John"
}

// 2

{
    function getNumbersInRange(a, b) {
        let numbers = [];
        for (let i = a; i <= b; i++) {
          numbers.push(i);
        }
        return numbers;
      }
      
      console.log(getNumbersInRange(1, 9)); // [1, 2, 3, 4, 5]
}

// 3

{
    function booleanToNumber(bool) {
        return bool ? 1 : 0;
      }
      
      console.log(booleanToNumber(true)); // 1
      console.log(booleanToNumber(false)); // 0
}

// 4

{
    function getFirstLetter(name) {
        return name.charAt(0);
      }
      
      console.log(getFirstLetter("John")); // "J"
      console.log(getFirstLetter("Alice")); // "A"
}

// 5

{
    function sumNumbers(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
      }
      
      console.log(sumNumbers(1, 2, 3, 4, 5)); // 15
      console.log(sumNumbers(10, 20, 30)); // 60
}
