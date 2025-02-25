export {primeSubOperation}

function primeSubOperation(nums: number[]): boolean {
    for (let i: number = 0; i < nums.length; i++) {
        let bound: number

        if (i === 0) {
            bound = nums[0]
        } else {
            bound = nums[i] - nums[i - 1]
        }

        if (bound <= 0) {
            return false
        }

        let largestPrime: number = 0
        for (let j: number = bound - 1; j >= 2; j--) {
            if (isPrime(j)) {
                largestPrime = j
                break
            }
        }

        nums[i] -= largestPrime
    }

    return true
}


function isPrime(number: number): boolean {
    if (number < 2) {
        return false
    }

    for (let i: number = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}
