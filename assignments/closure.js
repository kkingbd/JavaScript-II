// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myFunction(x,y, result){
  console.log(result(x,y));
}
function add(a,b) {
  return(a+b);
}
function sub(a,b) {
  return(a-b);
}
function mult(a,b) {
  return(a*b);
}
myFunction( 6, 4, add);
myFunction( 9, 4, sub);
myFunction( 12, 4, mult);




// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns
  // a counter variable.
  let count = 0;
  return function () {
    return ++count;
  }
};
// Example usage: const newCounter = counter();
//newCounter(); // 1
//newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let increment = 0;
  let decrement = 0;
  return {
    incrementing : function () {
      return ++increment;
    },
    decrementing: function () {
      return --decrement;
    }
  }
};
