// Task 8 by Emanuel Mesak
// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    var result = '';
    for (var i = string.length - 1; i >=0; i--) {
        result += string[i];
    }
    console.log(result);
}
console.log("/* Reverse This String */");
reverseThisString("Hello");
console.log("");

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    var swap = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] >= 'a' && string[i] <= 'z') {
            swap += string[i].toUpperCase();
        }
        else if (string[i] >= 'A' && string[i] <= 'Z') {
            swap += string[i].toLowerCase();
        }
        else if (string[i] === ' ') {
            swap += string[i];
        }
    }
    
    console.log(swap);
}
console.log("/* Swap Case */");
swapCase("Hello World");
console.log("");


//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    return array.map(           
        function(far) {               
          return (far - 32) * 5 / 9
        }
      );
}
console.log("/* To Celcius */");
var grades = toCelcius([23, 32, 41, 50, 59]);
console.log(grades);
console.log("");


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    return array.map(           
        function(myArray) {               
              if (myArray >= 75) {
                  return myArray = true;
              }
              else if (myArray < 75) {
                  return myArray = false;
              }
        }
      );
}
console.log("/* Pass Or Fail */");
var grades = passOrFail([20, 30, 50, 80, 90, 100]);
console.log(grades);
console.log("");


//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    const result = [];
    for (var i = 0; i < 5; i++) {
        result[i] = cardinalNumbers[i] + " is " + germanNumbers[i];
    }
    console.log(result);
}
console.log("/* German Numbers */");
germanNumbers();
console.log("");


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    //Giving fat arrow functions a shot
    numbers = numbers.filter((num) => {
        for (var i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              return false;
          }
        }
        return num > 1;
    });
      
    console.log(numbers);
}
console.log("/* Return Prime Numbers */");
returnPrimeNumbers();
console.log("");


//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 
function csc225Rules() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("CSC225 RULES");
        }
        else if (i % 5 === 0 && i % 3 !== 0) {
            console.log("I LOVE JAVASCRIPT");
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        }
        else {
            console.log(i);
        }
    }
}
console.log("/* CSC 225 Rules */");
csc225Rules();
console.log("");

