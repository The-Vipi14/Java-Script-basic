let arr = [3,4,5,6,7,8,9];

let count = 1;
for(let i = arr.length - 1;i>=arr.length - 3; i--){
    if(count === 3){
        console.log(arr[i])
    }
    count++;
}