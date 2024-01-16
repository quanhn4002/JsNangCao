// Function Declaration
function addDollarSign(value) {
    return '$' + value;
  }
  
  console.log(addDollarSign(100));
  

  const addPlusSign = function (value) {
    return '+' + value;
  };
  
  console.log(addPlusSign(200));

  // Arrow Function


  // function add(a, b) {
//   return a + b;
// }

const add = (a, b) => {
    return a + b;
  };

const subtact= (a,b)=> a-b;

console.log(subtact(10,5));

const multiply = (a,b) => a*b;
console.log(multiply(10,5));

const creatOjb = ()=> (
    {
        name : 'Lee',
        age : 20,
    }
);

console.log(creatOjb());
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n, "in forEach");
});


// IFFE Syntax (Has it's own scope and runs right away)
(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
  })();
  
  // Params
  (function (name) {
    console.log('Hello ' + name);
  })('Shawn');
  
  // Named IIFE (Can only be called recursively)
  (function hello() {
    console.log('Hello');
  })();


  function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      min,
      max,
    };
  }
  
  console.log(minMax([2, 31, 4, 5, 6]));
  ((length, width) => {
    const area = length * width;
  
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
  
    console.log(output);
  })(20, 10);