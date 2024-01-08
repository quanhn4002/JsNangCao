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