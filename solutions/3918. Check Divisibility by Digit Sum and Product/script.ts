export {checkDivisibility}

function checkDivisibility(number: number): boolean {
    let digitSum: number = 0
    let digitProduct: number = 1
    let remainingNumber: number = number

    while (remainingNumber > 0) {
        const digit: number = remainingNumber % 10

        digitSum += digit
        digitProduct *= digit
        remainingNumber = Math.floor(remainingNumber / 10)
    }

    return number % (digitSum + digitProduct) === 0
}
