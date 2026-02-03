// 1
// 2 3
// 4 5 6
// 7 8 9 10


// for (let i = 1; i <= 6; i++) {
//     let row = ""
//     for (let j = i; j <= i + (i - 1); j++) {
//         row += j + " "
//     }
//     console.log(row);
// }



let num = 1;
for (let i = 1; i < 4; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        process.stdout.write(num)
        num++
    }
    console.log(" ")
}



