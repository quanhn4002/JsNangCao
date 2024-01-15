// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "John",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "KIU IU ÂY END",
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//03-global-function-scope
const x = 100;

console.log(x, "in global");

function run() {
 
  console.log(window.innerHeight); 
  console.log(x, "in function");
}

run();

// Access global vars in blocks
if (true) {
  console.log(x, "in block");
}

function add() {
  const x = 1;
  const y = 50;
  console.log(x + y);
}

add();

//0404-block-scope
const p = 100;

// An If statement is a block
if (true) {
  console.log(p);
  const y = 200;
  console.log(p + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);

// var IS function scoped
function run() {
  var d = 100;
  console.log(d);
}

run();

// console.log(d);


const foo = 1;
var bar = 2; // Put on the window object

// nestes-scope
function first() {
  const o = 100;

  function second() {
    const m = 200;
    console.log(o + m);
  }

  // console.log(m);

  second();
}

first();

