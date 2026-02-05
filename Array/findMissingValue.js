let arr = [11,12,13,15,16,18,19];

let start = arr[0];
for(let i = 0; i< arr.length; i++){
    if(start !== arr[i]){
        console.log(start+ " :is the missing value.");
        return;
    }
    start++;
}
