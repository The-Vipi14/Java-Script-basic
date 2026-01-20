// function promo(check) {
//     return new Promise((res, rej) => {
//         if (check) {
//             res("promise complete successfully✅.");
//         } else {
//             rej("promise rejected❌");
//         }
//     })
// }


// let userData;
// const data = async () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json())
//         .then((data) => {
//             userData = data
//         })
//         .catch((err) => {
//             console.log("error:", err)
//         });
// }


// console.log(userData);



// const arr =[ 1,2,3,4]
// console.log(Array.isArray(arr));



// const fetchUsers = (url)=>{
//     return new Promise ((resolve, rej)=>{
//         fetch(url)
//         .then((res)=>res.json())
//         .then(data=> resolve(data))
//         .catch(error=> rej(error))
//     })
// }

// fetchUsers("https://jsonplaceholder.typicode.com/users")
// .then(res=> console.log(res))
// .catch(error => console.log(error))



const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 5);

// console.log(sum); // 10


const fruits = ["apple", "banana", "apple", "orange"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 2, banana: 1, orange: 1 }
