let str = "hello sir, how are you"

let newStr = ""

function replaceWith(str) {
    for (let ch of str) {
        if (ch === " ") {
            newStr += "_"
        }
        newStr += ch
    }
    return newStr
}

console.log(replaceWith(str));

