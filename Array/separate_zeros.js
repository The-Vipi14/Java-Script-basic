let arr = [1, 5, 8, 5, 6, 54, 5 , 0, 0,0];

let i = 0, j = 0;
while (i < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++
    }
    i++
}

console.log(arr)
