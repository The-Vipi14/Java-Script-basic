let str = "hello this is js tutorial."

// console.log(str.length)


// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     count++
// }
// console.log(count)


// let count = 0;
// function countChr(str) {

//     for (let i = 0; i < str.length; i++) {
//          count++
//     }
//     return count
// }


// console.log(countChr(str))







// let strLen = 0;

// let i = 0;

// while(str[i]!==undefined){
//     strLen++;
//     i++
// }

// console.log(strLen)


function getLength(str) {
  if (str === "") return 0;
  return 1 + getLength(str.slice(1));
}

console.log(getLength("Hello")); 