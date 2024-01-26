// // function getData(endpoint, cb) {
// //     const xhr = new XMLHttpRequest(); // là gì ??   // đây là 1 object
  
// //     xhr.open('GET', endpoint);
  
// //     xhr.onreadystatechange = function () {
// //       if ((this.readyState === 4) & (this.status === 200)) {
// //         cb(JSON.parse(this.responseText));
// //       }
// //     };
  
// //     setTimeout(() => {
// //       xhr.send();
// //     }, Math.floor(Math.random() * 3000) + 1000);
// //   }
  
// //   getData('./movies.json', (data) => {
// //     console.log(data);
// //     getData('./actors.json', (data) => {
// //       console.log(data);
// //       getData('./directors.json', (data) => {
// //         console.log(data);
// //       });
// //     });
// //   });




// //   function getData(endpoint) {
// function getData(endpoint) {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
  
//       xhr.open('GET', endpoint);
  
//       xhr.onreadystatechange = function () {
//         if (this.readyState === 4) {
//           if (this.status === 200) {
//             resolve(JSON.parse(this.responseText));
//           } else {
//             reject('Something went wrong');
//           }
//         }
//       };
  
//       setTimeout(() => {
//         xhr.send();
//       }, Math.floor(Math.random() * 3000) + 1000);
//     });
//   }
  
//   // Whatever we return from a .then() is passed into the next .then() callback function args
//   getData('./movies.json')
//     .then((movies) => {
//       console.log(movies);
//       return getData('./actors.json');
//     })
//     .then((actors) => {
//       console.log(actors);
//       return getData('./directors.json');
//     })
//     .then((directors) => {
//       console.log(directors);
//     })
//     .catch((error) => console.log(error));



function getData(endpoint) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open('GET', endpoint);
  
      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject('Something went wrong');
          }
        }
      };
  
      setTimeout(() => {
        xhr.send();
      }, Math.floor(Math.random() * 3000) + 1000);
    });
  }
  
  const moviesPromise = getData('./movies.json');
  const actorsPromise = getData('./actors.json');
  const directorsPromise = getData('./directors.json');
  
  const dummyPromise = new Promise((resolve, reject) => {
    resolve('Hello World');
  });
  
  // Takes in promises
  Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
    .then((data) => {
      // Returns an array of promise results
      console.log(data);
    })
    .catch((error) => console.log(error));