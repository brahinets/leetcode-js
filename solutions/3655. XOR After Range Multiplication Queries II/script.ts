export { xorAfterQueries }

const MODULUS: number = 1_000_000_007

function mulmod(first: number, second: number): number {
    const secondHigh: number = Math.floor(second / 32768)
    const secondLow: number = second % 32768
    return ((first * secondLow % MODULUS) + (first * secondHigh % MODULUS) * 32768) % MODULUS
}

function modPow(base: number, exponent: number): number {
    let result: number = 1
    base = base % MODULUS
    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result = mulmod(result, base)
        }
        exponent = Math.floor(exponent / 2)
        base = mulmod(base, base)
    }
    return result
}

function modInverse(value: number): number {
    return modPow(value, MODULUS - 2)
}

function xorAfterQueries(nums: number[], queries: number[][]): number {
    const length: number = nums.length
    const blockSize: number = Math.ceil(Math.sqrt(length))

    const totalMultiplier: number[] = new Array(length).fill(1)

    for (const [left, right, step, multiplier] of queries) {
        if (step >= blockSize) {
            for (let index = left; index <= right; index += step) {
                totalMultiplier[index] = mulmod(totalMultiplier[index], multiplier)
            }
        }
    }

    const diff: number[] = new Array(length + 1).fill(1)

    for (let step = 1; step < blockSize; step++) {
        diff.fill(1)

        for (const [left, right, queryStep, multiplier] of queries) {
            if (queryStep !== step) { continue }
            const last: number = left + Math.floor((right - left) / step) * step
            diff[left] = mulmod(diff[left], multiplier)
            if (last + step < length) {
                diff[last + step] = mulmod(diff[last + step], modInverse(multiplier))
            }
        }

        for (let residue = 0; residue < step && residue < length; residue++) {
            let prefixProduct: number = 1
            for (let index = residue; index < length; index += step) {
                prefixProduct = mulmod(prefixProduct, diff[index])
                totalMultiplier[index] = mulmod(totalMultiplier[index], prefixProduct)
            }
        }
    }

    let result: number = 0
    for (let index = 0; index < length; index++) {
        result ^= mulmod(nums[index], totalMultiplier[index])
    }

    return result
}
