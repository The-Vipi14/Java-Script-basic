// let arr = [10, 30, 40, 4, 40];

// let max = arr[0];
// let sec_max = arr[1];

// for (let i = 2; i < arr.length; i++) {
//     if (max < arr[i]) {
//         sec_max = max;
//         max = arr[i];
//     } else if (sec_max < arr[i] && max !== arr[i]) {
//         sec_max = arr[i];
//     }

//     if (sec_max > max) {
//         max = sec_max
//     }
// }

// console.log(sec_max);




let arr = [5, 30, 20, 4, 10];

let max = arr[0];
let sec_max = arr[1];

if (sec_max > max) {
    let temp = max;
    max = sec_max;
    sec_max = temp;
}

for (let i = 2; i < arr.length; i++) {

    if (arr[i] > max) {
        sec_max = max;
        max = arr[i];
    }
    else if (arr[i] > sec_max && arr[i] !== max) {
        sec_max = arr[i];
    }
}

console.log(sec_max);
