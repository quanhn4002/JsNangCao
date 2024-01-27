// const titel = document.getElementById('main');
// console.log(titel);
// //  thay đổi nội dung của thẻ
// titel.innerHTML = '<h1>Đây là nội dung thay đổi bằng js </h1>';
// // thay đổi style của thẻ
// titel.style.color = 'red';

// 
const huhi= document.querySelectorAll("h1");//.class_name
console.log(huhi);
huhi[0].style.color = 'blue';
// thêm các phần tử dom
const div = document.createElement('div');
div.innerHTML = '<h3>Đây là nội dung MỚI ĐƯỢC THÊM VÀO </h3>';
div.style.color = 'red';
const element = document.getElementById('main');
element.appendChild(div);

// beforebegin: làm cha
// afterbegin: làm con đầu tiên
// beforeend: làm con cuối cùng
// afterend: làm anh em
const div2 = document.createElement('div');
div2.innerHTML = '<h3>Đây là nội dung MỚI ĐƯỢC THÊM VÀO 2 </h3>';
// add class
div2.classList.add('container');

div2.style.color = 'red';
const element2 = document.getElementById('main');
element2.insertAdjacentElement('afterbegin',div2);

const div3 = document.createElement('div');
div3.innerHTML = '<h3>Đây là nội dung MỚI ĐƯỢC THÊM VÀO 3 </h3>';
div3.style.color = 'red';
const element3 = document.getElementById('main');
element3.insertAdjacentElement('beforeend',div3);

// remove
const remove = document.querySelector('h1');
remove.remove();


// thêm class
// on dom load
// tạo thẻ
const divElement = document.createElement('div');
// tạo nd
divElement.innerHTML = '<h3>Đây là nội dung MỚI ĐƯỢC THÊM VÀO 3 </h3>';

// thêm class
const parent = document.getElementById('parent');
parent.appendChild(divElement);