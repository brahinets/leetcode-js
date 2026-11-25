import { arrayOf, arrayOfZeros } from '../../common/array-factories'

export { smallestUniqueSubarrayLength }

const MODULUS_ONE: number = 67_108_859
const MODULUS_TWO: number = 33_554_429
const BASE_ONE: number = 131
const BASE_TWO: number = 13_801

interface HashPair {
    readonly modulus: number
    readonly prefix: number[]
    readonly powers: number[]
}

function smallestUniqueSubarrayLength(nums: number[]): number {
    const arrayLength: number = nums.length
    const first: HashPair = buildHashPair(nums, BASE_ONE, MODULUS_ONE)
    const second: HashPair = buildHashPair(nums, BASE_TWO, MODULUS_TWO)

    let low: number = 1
    let high: number = arrayLength

    while (low < high) {
        const middle: number = Math.floor((low + high) / 2)

        if (hasUniqueSubarray(arrayLength, middle, first, second)) {
            high = middle
        } else {
            low = middle + 1
        }
    }

    return low
}

function hasUniqueSubarray(
    arrayLength: number,
    windowLength: number,
    first: HashPair,
    second: HashPair,
): boolean {
    const counts: Map<number, number> = new Map<number, number>()

    for (let start: number = 0; start + windowLength <= arrayLength; start++) {
        const firstHash: number = windowHash(first, start, windowLength)
        const secondHash: number = windowHash(second, start, windowLength)
        const key: number = firstHash * MODULUS_TWO + secondHash

        counts.set(key, (counts.get(key) ?? 0) + 1)
    }

    for (const count of counts.values()) {
        if (count === 1) {
            return true
        }
    }

    return false
}

function windowHash(
    pair: HashPair,
    start: number,
    windowLength: number,
): number {
    const difference: number = pair.prefix[start + windowLength] -
        (pair.prefix[start] * pair.powers[windowLength]) % pair.modulus

    return (difference + pair.modulus) % pair.modulus
}

function buildHashPair(
    nums: number[],
    base: number,
    modulus: number,
): HashPair {
    const prefix: number[] = arrayOfZeros(nums.length + 1)
    const powers: number[] = arrayOf(1, nums.length + 1)

    for (let index: number = 0; index < nums.length; index++) {
        prefix[index + 1] = (prefix[index] * base + nums[index]) % modulus
        powers[index + 1] = (powers[index] * base) % modulus
    }

    const hashPair: HashPair = { modulus, prefix, powers }

    return hashPair
}
