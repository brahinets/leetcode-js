import {arrayOf, arrayOfZeros, matrixOfZeros} from "../../common/array-factories"

export {idealArrays}

const mod: number = 1e9 + 7
const MAX_N: number = 10010
const MAX_P: number = 15

function idealArrays(n: number, maxValue: number): number {
    const sieveArray: number[] = getSieve()
    const primeFactorCountsArray: number[][] = getPrimeFactorCounts(sieveArray)
    const binomialCoefficients: number[][] = getBinomialCoefficients()

    let total: bigint = 0n
    for (let x: number = 1; x <= maxValue; x++) {
        let product: bigint = 1n

        for (const count of primeFactorCountsArray[x]) {
            product = (product * BigInt(binomialCoefficients[n + count - 1][count])) % BigInt(mod)
        }

        total = (total + product) % BigInt(mod)
    }

    return Number(total)
}

function getSieve(): number[] {
    const sieveCopy: number[] = arrayOfZeros(MAX_N)

    for (let i: number = 2; i < MAX_N; i++) {
        if (sieveCopy[i] === 0) {
            for (let j: number = i; j < MAX_N; j += i) {
                if (sieveCopy[j] === 0) {
                    sieveCopy[j] = i
                }
            }
        }
    }

    return sieveCopy
}

function getPrimeFactorCounts(sieve: number[]): number[][] {
    const primeFactorCounts: number[][] = arrayOf([], MAX_N)

    for (let i: number = 2; i < MAX_N; i++) {
        let x: number = i

        while (x > 1) {
            const p: number = sieve[x]
            let count: number = 0

            while (x % p === 0) {
                x = Math.floor(x / p)

                count++
            }

            primeFactorCounts[i].push(count)
        }
    }

    return primeFactorCounts
}

function getBinomialCoefficients(): number[][] {
    const combinations: number[][] = matrixOfZeros(MAX_N + MAX_P, MAX_P + 1)

    for (let i: number = 0; i < MAX_N + MAX_P; i++) {
        combinations[i][0] = 1

        for (let j: number = 1; j <= Math.min(i, MAX_P); j++) {
            combinations[i][j] = (combinations[i - 1][j] + combinations[i - 1][j - 1]) % mod
        }
    }

    return combinations
}
