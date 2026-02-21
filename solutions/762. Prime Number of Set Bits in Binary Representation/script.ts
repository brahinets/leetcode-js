export {countPrimeSetBits}

function countPrimeSetBits(left: number, right: number): number {
    let countOfNumbersWithPrimeSetBits: number = 0

    for (let number: number = left; number <= right; number++) {
        const setBitsCount: number = countSetBits(number)

        if (isPrime(setBitsCount)) {
            countOfNumbersWithPrimeSetBits++
        }
    }

    return countOfNumbersWithPrimeSetBits
}

function countSetBits(number: number): number {
    return number.toString(2)
        .split('')
        .filter((bit: string): boolean => bit === '1')
        .length
}

function isPrime(number: number): boolean {
    if (number < 2) {
        return false
    }

    if (number === 2) {
        return true
    }

    if (number % 2 === 0) {
        return false
    }

    for (let divisor: number = 3; divisor * divisor <= number; divisor += 2) {
        if (number % divisor === 0) {
            return false
        }
    }

    return true
}

