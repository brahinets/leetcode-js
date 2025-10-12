import {arrayOf} from "../../common/array-factories"

export {magicalSum}

const MOD: bigint = 1000000007n

function magicalSum(m: number, k: number, nums: number[]): number {
    const factorial: bigint[] = computeFactorials(m, MOD)
    const inverseFactorial: bigint[] = computeInverseFactorials(m, MOD)
    const powers: bigint[][] = computePowers(nums, m, MOD)

    const magicalSequenceStates: bigint[][][][] = initializeMagicalSequenceStates(nums.length, m, k)
    initializeFirst(magicalSequenceStates, powers, inverseFactorial, m)

    fillMagicalSequenceStates(magicalSequenceStates, powers, inverseFactorial, nums.length, m, k, MOD)

    let result: bigint = 0n
    for (let p: number = 0; p <= m * 2; p++) {
        for (let q: number = 0; q <= k; q++) {
            if (countBits(p) + q === k) {
                result = (result + (magicalSequenceStates[nums.length - 1][m][p][q] * factorial[m]) % MOD) % MOD
            }
        }
    }
    return Number(result)
}

function computeFactorials(m: number, mod: bigint): bigint[] {
    const factorial: bigint[] = arrayOf(1n, m + 1)

    for (let i: number = 1; i <= m; i++) {
        factorial[i] = (factorial[i - 1] * BigInt(i)) % mod
    }

    return factorial
}

function computeInverseFactorials(m: number, mod: bigint): bigint[] {
    const inverse: bigint[] = arrayOf(1n, m + 1)

    for (let i: number = 2; i <= m; i++) {
        inverse[i] = fastPower(BigInt(i), mod - 2n, mod)
    }

    for (let i: number = 2; i <= m; i++) {
        inverse[i] = (inverse[i - 1] * inverse[i]) % mod
    }

    return inverse
}

function computePowers(nums: number[], m: number, mod: bigint): bigint[][] {
    const n: number = nums.length
    const powers: bigint[][] = []

    for (let i: number = 0; i < n; i++) {
        powers[i] = arrayOf(1n, m + 1)

        for (let j: number = 1; j <= m; j++) {
            powers[i][j] = (powers[i][j - 1] * BigInt(nums[i])) % mod
        }
    }

    return powers
}

function initializeMagicalSequenceStates(n: number, m: number, k: number): bigint[][][][] {
    const states: bigint[][][][] = []

    for (let i: number = 0; i < n; i++) {
        states[i] = []
        for (let j: number = 0; j <= m; j++) {
            states[i][j] = []
            for (let p: number = 0; p <= m * 2; p++) {
                states[i][j][p] = arrayOf(0n, k + 1)
            }
        }
    }

    return states
}

function initializeFirst(
    magicalSequenceStates: bigint[][][][],
    powers: bigint[][],
    inverseFactorial: bigint[],
    m: number
): void {
    for (let j: number = 0; j <= m; j++) {
        magicalSequenceStates[0][j][j][0] = (powers[0][j] * inverseFactorial[j]) % 1000000007n
    }
}

function fillMagicalSequenceStates(
    magicalSequenceStates: bigint[][][][],
    powers: bigint[][],
    inverseFactorial: bigint[],
    n: number,
    m: number,
    k: number,
    mod: bigint
): void {
    for (let i: number = 0; i + 1 < n; i++) {
        for (let j: number = 0; j <= m; j++) {
            for (let p: number = 0; p <= m * 2; p++) {
                for (let q: number = 0; q <= k; q++) {
                    if (magicalSequenceStates[i][j][p][q] === 0n) {
                        continue
                    }

                    const nextQ: number = (p % 2) + q
                    if (nextQ > k) {
                        break
                    }

                    for (let r: number = 0; r + j <= m; r++) {
                        const nextP: number = Math.floor(p / 2) + r
                        if (nextP > m * 2) {
                            break
                        }

                        magicalSequenceStates[i + 1][j + r][nextP][nextQ] =
                            (magicalSequenceStates[i + 1][j + r][nextP][nextQ] +
                                (((magicalSequenceStates[i][j][p][q] * powers[i + 1][r]) % mod) * inverseFactorial[r]) % mod) % mod
                    }
                }
            }
        }
    }
}

function fastPower(x: bigint, y: bigint, mod: bigint): bigint {
    let result: bigint = 1n
    let base: bigint = x % mod
    let exponent: bigint = y

    while (exponent > 0n) {
        if (exponent & 1n) {
            result = (result * base) % mod
        }

        exponent >>= 1n
        base = (base * base) % mod
    }
    return result
}

function countBits(n: number): number {
    let count: number = 0
    let value: number = n

    while (value > 0) {
        count += value & 1
        value >>= 1
    }

    return count
}
