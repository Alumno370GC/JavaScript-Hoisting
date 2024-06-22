//Here is a example of Variable Hosting
console.log(text);

//declare and initialize test variable
var test = 5;

//Hosting with 'var'
//When we declare a variable using var

//use the message variable before declaration
console.log(message);
var message;


//Hoisting With 'let' and 'const'

console.log("message");
let message;



//FUNCTION Hoisting

//function call
greeting();

 //function declaration
 function greeting(){
console.log("Welcome to Programiz. ");

 }

//INIALIZATIONS ARE NOT Hoisted
console.log(number);
var  number =5;

//the above program is equivalent to:

var number;
console.log(number);
number = 5;
