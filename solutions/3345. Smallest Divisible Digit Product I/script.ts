export {smallestNumber}

function smallestNumber(number: number, divisor: number): number {
    for (let candidate: number = number; ; candidate++) {
        if (digitProduct(candidate) % divisor === 0) {
            return candidate
        }
    }
}

function digitProduct(number: number): number {
    let product: number = 1
    let remainingNumber: number = number
    while (remainingNumber > 0) {
        product *= remainingNumber % 10
        remainingNumber = Math.floor(remainingNumber / 10)
    }

    return product
}
