// setTimeout - takes in a callback and a time to wait until that callback is executed

setTimeout(function () {
    console.log('Hello from callback');
  }, 2000);
  
  // Named function
  setTimeout(changeText, 3000);
  
  function changeText() {
    document.querySelector('h1').textContent = 'Hello from callback';
  }
  
  // clearTimeout() will clear a timer
  const timerId = setTimeout(changeText, 3000);
  
  document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled');
  });




  // const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

// color cố định 
// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }
//  random color
function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);  //(math.random() * 16777215).toString(16) => chuyển sang hệ 16 
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
    document.body.style.backgroundColor = 'white';
  clearInterval(intervalID);
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);