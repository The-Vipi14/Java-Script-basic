function outer(currentBalance) {
    let current = currentBalance
    return (ammout) => {
        return current = current + ammout
    }
}

let vipin = outer(100000);

let newAmount = vipin(200000);

newAmount = vipin(500000);

console.log(newAmount);

