// Create a new array
let myArray = [10, 21, 32, 43];

// Function expression that adds 1 and logs to the console
let addOne = function (num) {
  console.log(num + 1);
};

// Function that takes a function expression and a number
function processNumber(funcExpression, number) {
  if (number % 2 === 0) {
    funcExpression(number);
  } else {
    console.log("The number is odd");
  }
}

//  For-in loop through the array
for (let index in myArray) {
  processNumber(addOne, myArray[index]);
}
