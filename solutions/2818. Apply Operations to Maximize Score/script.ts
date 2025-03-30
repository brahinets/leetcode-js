import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {maximumScore}

const MOD: number = 1e9 + 7

function maximumScore(nums: number[], k: number): number {
    const n: number = nums.length
    const primeScores: number[] = arrayOfZeros(n)

    const maxElement: number = Math.max(...nums)
    const primes: number[] = getPrimes(maxElement)

    for (let index: number = 0; index < n; index++) {
        let num: number = nums[index]

        for (const prime of primes) {
            if (prime * prime > num) {
                break
            }

            if (num % prime !== 0) {
                continue
            }

            primeScores[index]++
            while (num % prime === 0) {
                num /= prime
            }
        }

        if (num > 1) {
            primeScores[index]++
        }
    }

    const nextDominant: number[] = arrayOf(n, n)
    const prevDominant: number[] = arrayOf(-1, n)
    const decreasingPrimeScoreStack: number[] = []

    for (let index: number = 0; index < n; index++) {
        while (
            decreasingPrimeScoreStack.length > 0 &&
            primeScores[decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1]] < primeScores[index]
            ) {
            const topIndex: number = decreasingPrimeScoreStack.pop()!
            nextDominant[topIndex] = index
        }

        if (decreasingPrimeScoreStack.length > 0) {
            prevDominant[index] = decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1]
        }

        decreasingPrimeScoreStack.push(index)
    }

    const numOfSubarrays: number[] = arrayOfZeros(n)
    for (let index: number = 0; index < n; index++) {
        numOfSubarrays[index] = (nextDominant[index] - index) * (index - prevDominant[index])
    }

    const sortedArray: [number, number][] = nums.map((num: number, index: number): [number, number] => [num, index])
    sortedArray.sort((a: [number, number], b: [number, number]): number => b[0] - a[0])

    let score: bigint = 1n
    let processingIndex: number = 0

    while (k > 0) {
        const [num, index] = sortedArray[processingIndex++]
        const operations: number = Math.min(k, numOfSubarrays[index])
        score = (score * power(BigInt(num), BigInt(operations))) % BigInt(MOD)
        k -= operations
    }

    return Number(score)
}

function power(base: bigint, exponent: bigint): bigint {
    let result: bigint = 1n

    while (exponent > 0n) {
        if (exponent % 2n === 1n) {
            result = (result * base) % BigInt(MOD)
        }

        base = (base * base) % BigInt(MOD)
        exponent /= 2n
    }

    return result
}

function getPrimes(limit: number): number[] {
    const isPrime: boolean[] = arrayOf(true, limit + 1)
    const primes: number[] = []

    for (let number: number = 2; number <= limit; number++) {
        if (!isPrime[number]) {
            continue
        }

        primes.push(number)

        for (let multiple: number = number * number; multiple <= limit; multiple += number) {
            isPrime[multiple] = false
        }
    }

    return primes
}
