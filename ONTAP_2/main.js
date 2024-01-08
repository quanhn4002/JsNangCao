let x;

const arr = [28, 38, 44, 29, 109];

// push() thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
arr.push(100);

console.log(x);

// pop() // xóa phần tử cuối cùng của mảng và trả về phần tử đó.
arr.pop();

console.log(x);
// unshift()// thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
arr.unshift(99);

console.log(x);
// shift()// xóa phần tử đầu tiên của mảng và trả về phần tử đó.
arr.shift();

console.log(x);
// reverse() // đảo ngược thứ tự của các phần tử trong mảng.
arr.reverse();

console.log(x);
// includes()// kiểm tra xem một mảng có chứa giá trị được chỉ định hay không và trả về true hoặc false tương ứng.
x = arr.includes(445);

console.log(x);
// indexOf()// trả về chỉ số đầu tiên của phần tử được chỉ định trong mảng.
x = arr.indexOf(28);

console.log(x);

x = arr.toString();// chuyển đổi mảng thành một chuỗi và trả về chuỗi đó.
x = arr.join();// chuyển đổi mảng thành một chuỗi và trả về chuỗi đó. Nếu bạn muốn thay đổi ký tự ngăn cách, bạn có thể truyền một chuỗi vào phương thức join().

console.log(x);
// slice() // trả về một mảng mới chứa các phần tử được cắt ra từ mảng ban đầu.
x = arr.slice(1, 4);

console.log(x);
// splice() // thêm hoặc xóa các phần tử trong mảng và trả về các phần tử đã bị xóa.
x = arr.splice(1, 4);

console.log(x);
// splice() // thêm hoặc xóa các phần tử trong mảng và trả về các phần tử đã bị xóa.

x = arr.splice(4, 1);

console.log(x);
// sort() // sắp xếp các phần tử trong mảng theo thứ tự tăng dần.
x = arr.sort();

console.log(x);
x = arr.slice(1, 4).reverse().toString().charAt(0);// lấy phần tử đầu tiên của chuỗi

console.log(x);

let y;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting arrays

// Nesting berries inside of fruits
fruits.push(berries);
console.log(fruits);

// Now we can access 'blueberry' with the following
y= fruits[3][1];

console.log(y);

const allFruits = [fruits, berries]; // là một mảng chứa 2 mảng fruits và berries

u = allFruits[1][2]; //
console.log(u);

// concat() - Concatenate arrays // nối mảng
u = fruits.concat(berries);
console.log(u);

console.log(" Nối mảng")
// // spread operator (...) - Concatenate with
u = [...fruits, ...berries];// nối mảng 
console.log(u);

// // flat()// làm phẳng mảng
const arrr = [1, 2, [3, 4, 5], 6, [7, 8]];// mảng lồng mảng
z = arr.flat();// làm phẳng mảng
console.log(z);

// // Static methods of Array object

// // isArray() - Check is is an array
u = Array.isArray(fruits);// kiểm tra xem fruits có phải là mảng hay không trả về true hoặc false
console.log(u);

// // from() - Create an array from an array like value
u = Array.from('12345'); // tạo mảng từ chuỗi
console.log(u); 
// // of() - Create an array from a set of values // tạo mảng từ các giá trị
const a = "quan";
const b = "hai";
const c = "nguyen";

 x = Array.of(a, b, c);

console.log(x);



// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);// nối mảng

// Solution 2
const arr4 = [...arr1, ...arr2];// nối mảng
arr4.splice(4, 1);

console.log(arr4);


//2.05
let p;

// Creating an object
const person = {
  name: 'Quan Hai Nguyen',
  age: 20,
  isAdmin: true,
  address: {
    street: 'Tam dao',
    city: 'VP',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

// Accessing object properties
p = person.name; // Dot notation // lấy ra giá trị của thuộc tính name
p = person['age']; // Bracket notation // lấy ra giá trị của thuộc tính age
p = person.address.state;// lấy ra giá trị của thuộc tính state 
//kết quả : MA
p = person.hobbies[0];// lấy ra giá trị của thuộc tính hobbies
//kết quả : music


// Updating properties
person.name = 'Chung tieu ngao';// cập nhật lại giá trị của thuộc tính name
person['isAdmin'] = false;// cập nhật lại giá trị của thuộc tính isAdmin
console.log(p);
// Deleting properties
delete person.age;// xóa thuộc tính age
console.log(p);
// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
// this là một từ khóa đặc biệt trong JavaScript, nó tham chiếu đến đối tượng hiện tại, tức là đối tượng được sử dụng để gọi phương thức.

person.greet();
console.log(p);

// Keys with multiple words
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

p = person2['first name'];

console.log(p);

// 06-object-spread-methods
console.log("06-object-spread-methods");



let l;

// Create object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

l = todo;
console.log(l);

// Object Nesting
const person1 = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};


l = person1.address.coords.lat;
console.log(l);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);// assign : gán
console.log(obj4);

// Array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

l = todos[0].name;
console.log(l);

// Get array of object keys
l = Object.keys(todo);// keys : lấy ra các key của object
console.log(l);

// Get length of an object
l = Object.keys(todo).length;// lấy ra độ dài của object
console.log(l);

// Get array of object values
l = Object.values(todo); // values : lấy ra các value của object
console.log(l);

// Get array of object key/value pairs
l = Object.entries(todo);// entries : lấy ra các cặp key/value của object
console.log(l);

// Check if object has a property
l = todo.hasOwnProperty('age');// hasOwnProperty : kiểm tra xem object có thuộc tính age hay không
console.log(l);





//// 2.07 destructuring-naming
console.log("destructuring-naming");
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person5 = {
  firstName,
  lastName,
  age,
};

console.log(person5.age);


// Destructuring object properties

const todo1 = {
  id: 1,
  title: 'Take out trash',
  user: {
    name1: 'John',
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo1;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;// rest : lấy ra các phần tử còn lại của mảng

console.log(first, second, rest);