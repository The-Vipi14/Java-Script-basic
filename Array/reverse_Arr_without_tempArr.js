let arr = [1, 2, 3, 4, 0, 9, 88];

for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (i != j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

console.log(arr)


// let arr = [2, 54, 6, 8, 9, 0, 9, 5];

// for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// console.log(arr);
