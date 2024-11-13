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
    //  function declaration
    function greeting(name) {
        return `Assalomu alaykum, ${name}`;
      }
      
      console.log(greeting("John")); // "Assalomu alaykum, John"
}
{
    //  function expression
    const  greeting = function(name) {
        return `Assalomu alaykum, ${name}`;
      }
      
      console.log(greeting("John")); // "Assalomu alaykum, John"

}
{
    // arrow function
    const  greeting = (name) => {
        return `Assalomu alaykum, ${name}`;
      }
      
      console.log(greeting("John")); // "Assalomu alaykum, John"
}

// 2

{
    // function declaration
    function getNumbersInRange(a, b) {
        let numbers = [];
        for (let i = a; i <= b; i++) {
          numbers.push(i);
        }
        return numbers;
      }
      
      console.log(getNumbersInRange(1, 9)); // [1, 2, 3, 4, 5]
}
{
    // function expression
    const getNumbersInRange = function(a, b) {
        let numbers = [];
        for (let i = a; i <= b; i++) {
          numbers.push(i);
        }
        return numbers;
      }
      
      console.log(getNumbersInRange(1, 9)); // [1, 2, 3, 4, 5]
}
{
    // arrow function
    const getNumbersInRange = (a, b) => {
        let numbers = [];
        for (let i = a; i <= b; i++) {
          numbers.push(i);
        }
        return numbers;
      }
}

// 3

{
    // function declaration
    function booleanToNumber(bool) {
        return bool ? 1 : 0;
      }
      
      console.log(booleanToNumber(true)); // 1
      console.log(booleanToNumber(false)); // 0
}
{
    // function expression
    const booleanToNumber = function(bool) {
        return bool ? 1 : 0;
      }
      
      console.log(booleanToNumber(true)); // 1
      console.log(booleanToNumber(false)); // 0
}
{
    // arrow function
    const booleanToNumber = (bool) => {
        return bool ? 1 : 0;
      }
      
      console.log(booleanToNumber(true)); // 1
}

// 4

{
    // function declaration
    function getFirstLetter(name) {
        return name.charAt(0);
      }
      
      console.log(getFirstLetter("John")); // "J"
      console.log(getFirstLetter("Alice")); // "A"
}
{
    // function expression
    const getFirstLetter = function(name) {
        return name.charAt(0);
      }
      
      console.log(getFirstLetter("John")); // "J"
      console.log(getFirstLetter("Alice")); // "A"
}
{
    // arrow function
    const getFirstLetter = (name) => {
        return name.charAt(0);
      }
      
      console.log(getFirstLetter("John")); // "J"
}

// 5

{
    // function declaration
    function sumNumbers(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
      }
      
      console.log(sumNumbers(1, 2, 3, 4, 5)); // 15
      console.log(sumNumbers(10, 20, 30)); // 60
}
{
    // function expression
    const sumNumbers = function(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
      }
      
      console.log(sumNumbers(1, 2, 3, 4, 5)); // 15
      console.log(sumNumbers(10, 20, 30)); // 60
}
{
    // arrow function
    const sumNumbers = (...numbers) => {
        return numbers.reduce((a, b) => a + b, 0);
      }
      
      console.log(sumNumbers(1, 2, 3, 4, 5)); // 15
      console.log(sumNumbers(10, 20, 30)); // 60
}