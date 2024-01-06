let x;

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
x = person.name; // Dot notation // lấy ra giá trị của thuộc tính name
x = person['age']; // Bracket notation // lấy ra giá trị của thuộc tính age
x = person.address.state;// lấy ra giá trị của thuộc tính state
x = person.hobbies[0];// lấy ra giá trị của thuộc tính hobbies


// Updating properties
person.name = 'Chung tieu ngao';// cập nhật lại giá trị của thuộc tính name
person['isAdmin'] = false;// cập nhật lại giá trị của thuộc tính isAdmin
console.log(x);
// Deleting properties
delete person.age;// xóa thuộc tính age
console.log(x);
// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
// this là một từ khóa đặc biệt trong JavaScript, nó tham chiếu đến đối tượng hiện tại, tức là đối tượng được sử dụng để gọi phương thức.

person.greet();
console.log(x);

// Keys with multiple words
const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);