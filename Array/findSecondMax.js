let arr = [16, 1, 5, 6, 12, 9];

let max = arr[0]
let sec_max = arr[1]

for (let i = 2; i < arr.length; i++) {
    if (max < arr[i]) {
        sec_max = max
        max = arr[i];
    }else if(sec_max < arr[i]){
        sec_max = arr[i]
    }
}

console.log(sec_max)