export {closestPrimes}

function closestPrimes(left: number, right: number): number[] {
    let prevPrime: number = -1
    let closestA: number = -1
    let closestB: number = -1
    let minDifference: number = Infinity

    for (let candidate: number = left; candidate <= right; candidate++) {
        if (isPrime(candidate)) {
            if (prevPrime != -1) {
                let difference: number = candidate - prevPrime

                if (difference < minDifference) {
                    minDifference = difference
                    closestA = prevPrime
                    closestB = candidate
                }

                if (difference == 2 || difference == 1) return [
                    prevPrime,
                    candidate,
                ]
            }

            prevPrime = candidate
        }
    }

    return closestA == -1 ? [-1, -1] : [closestA, closestB]
}

function isPrime(number: number): boolean {
    if (number < 2) {
        return false
    }

    if (number == 2 || number == 3) {
        return true
    }

    if (number % 2 == 0) {
        return false
    }

    for (let divisor: number = 3; divisor * divisor <= number; divisor += 2) {
        if (number % divisor == 0) {
            return false
        }
    }

    return true
}
