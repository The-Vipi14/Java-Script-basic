let arr = [1, 23, 5, 232, 44, 5]

let temp_arr = [];

let length_of_arr = 0;

while (arr[length_of_arr] !== undefined) {
    length_of_arr++
}

for (let i = length_of_arr - 1, j = 0; i >= 0; i--, j++) {
    temp_arr[j] = arr[i]
}

console.log(temp_arr)

