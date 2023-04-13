// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/
// - Write a Function Declaration
function addOne(){
  return n + 1;
}

// - Write a Function Expression
let addOne =function (n){
  return n + 1;
}
// - Write an Arrow Function without curly brackets(if possible)
let addOne =(n) => n + 1;

// - Write an Arrow Function with curly brackets
let addOne =(n) => {
  return n + 1;
}
// - Execute the function
addOne(20);
// - Execute the function and store the return value in a variable.
let addValue = addOne(21);
// - What is the typeof returnValue
//typeof return value is "number"


/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(n){
  return n - 1;
}

// - Write a Function Expression
let subtractOne =function (n){
  return n - 1;
}
// - Write an Arrow Function without curly brackets(if possible)
let subtractOne =(n) => n - 1;

// - Write an Arrow Function with curly brackets
let subtractOne =(n) => {
  return n - 1;
}
// - Execute the function
sub(20);
// - Execute the function and store the return value in a variable.
let subValue = subtractOne(21);
// - What is the typeof returnValue
//typeof return value is "number"
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA , numB){
  return numA + numB;
}

// - Write a Function Expression
 let sum = function (numA , numB){
  return numA + numB;
}

// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA , numB) => numA + numB;

// - Write an Arrow Function with curly brackets
let sum =  (numA , numB) => {
  return numA + numB;
}
// - Execute the function
sum(21 , 20)
// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
let addTwoNumber = sum(20,21);

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num){
  return num * num;
}

// - Write a Function Expression
let square = function ( num) {
  return num * num;
} ;

// - Write an Arrow Function without curly brackets(if possible)
let square =  ( num) => num * num;

// - Write an Arrow Function with curly brackets
let square =(num) => {
  return num * num;
} ;
// - Execute the function
 square(20);
// - Execute the function and store the return value in a variable
let finalValue = sqaure(20);
// - What is the typeof returnValue
//the typeof returnvalue i.e finalValue is "number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x , y){
  if (x > y) {
    return true;
  } else{
    return false;
  }
}
// - Write a Function Expression
let isGreater= function (x , y){
  if (x > y) {
    return true;
  } else{
    return false;
  }
}
// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arrow Function with curly brackets
let isGreater= (x , y) =>{
  if (x > y) {
    return true;
  } else{
    return false;
  }
}
// - Execute the function
isGreater(21, 23);
// - Execute the function and store the return value in a variable
let greaterValue = isGreater (22,34);
// - What is the typeof returnValue
// -  the typeof returnValue is boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number){
  if (number % 2 == 0) {
    return `Number is odd`;
  } else{
    return `Number is odd`;
  }
};
// - Write an anonymous Function Expression
let  oddOrEven= function (number){
  if (number % 2 == 0) {
    return `Number is odd`;
  } else{
    return `Number is odd`;
  }
};
// - Write an named Function Expression
let oddOrEven=  function  evenOdd(number){
  if (number % 2 == 0) {
    return `Number is odd`;
  } else {
    return `Number is odd`;
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) => number % 2 == 0 ? `Number is odd`: `Number is odd`;
// - Write an Arrow Function with curly brackets
let oddOREven = (number) => {
  if (number % 2 == 0) {
    return `Number is odd`;
  } else {
    return `Number is odd`;
  }
}
// - Execute the function
oddOREven();


// - Execute the function and store the return value in a variable
let evenOdd = oddOREven();

// - What is the typeof returnValue
//"number"