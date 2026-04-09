import { arrayOf } from "../../common/array-factories"

export { xorAfterQueries }

const MODULUS: number = 1_000_000_007

function mulmod(first: number, second: number): number {
    const secondHigh: number = second >>> 15
    const secondLow: number = second & 0x7FFF
    return ((first * secondLow % MODULUS) + (first * secondHigh % MODULUS) * 32768) % MODULUS
}

function modPow(base: number, exponent: number): number {
    let result: number = 1
    base = base % MODULUS
    while (exponent > 0) {
        if (exponent & 1) {
            result = mulmod(result, base)
        }
        exponent >>>= 1
        base = mulmod(base, base)
    }
    return result
}

function xorAfterQueries(nums: number[], queries: number[][]): number {
    const length: number = nums.length
    const blockSize: number = Math.ceil(Math.sqrt(length))

    const totalMultiplier: number[] = arrayOf(1, length)
    const queriesByStep: [number, number, number][][] = new Array(blockSize)
    for (const [left, right, step, multiplier] of queries) {
        if (step >= blockSize) {
            for (let index = left; index <= right; index += step) {
                totalMultiplier[index] = totalMultiplier[index] * multiplier % MODULUS
            }
        } else {
            if (queriesByStep[step] === undefined) {
                queriesByStep[step] = []
            }

            queriesByStep[step].push([left, right, multiplier])
        }
    }

    const inverseCache: number[] = []
    const diff: number[] = arrayOf(1, length + 1)
    const touchedPositions: number[] = []

    for (let step = 1; step < blockSize; step++) {
        const stepQueries = queriesByStep[step]
        if (stepQueries === undefined) {
            continue
        }

        for (const [left, right, multiplier] of stepQueries) {
            const last: number = left + ((right - left) / step | 0) * step

            diff[left] = diff[left] * multiplier % MODULUS

            touchedPositions.push(left)
            if (last + step < length) {
                let inverse: number = inverseCache[multiplier]

                if (inverse === undefined) {
                    inverse = modPow(multiplier, MODULUS - 2)
                    inverseCache[multiplier] = inverse
                }

                diff[last + step] = mulmod(diff[last + step], inverse)

                touchedPositions.push(last + step)
            }
        }

        for (let residue = 0; residue < step && residue < length; residue++) {
            let prefixProduct: number = 1

            for (let index = residue; index < length; index += step) {
                prefixProduct = mulmod(prefixProduct, diff[index])

                totalMultiplier[index] = mulmod(totalMultiplier[index], prefixProduct)
            }
        }

        for (const position of touchedPositions) {
            diff[position] = 1
        }

        touchedPositions.length = 0
    }

    let result: number = 0
    for (let index = 0; index < length; index++) {
        result ^= mulmod(nums[index], totalMultiplier[index])
    }

    return result
}
