let arr = [1, 2, 3, 4, [4, 5, 7, 8, [5, 6, 7, 8, 9]]];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        newArr.push(arr[i]);
    }
    for (let j = 0; j < arr[i].length; j++) {
        if ( typeof arr[j] === 'number') {
            newArr.push(arr[i][j]);
        }
        for (let k = 0; k < arr[i][j].length; k++) {
            newArr.push(arr[i][j][k]);
        }
    }
}

console.log(newArr);



