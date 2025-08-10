import {arrayOfZeros} from "../../common/array-factories"

export {reorderedPowerOf2}

function reorderedPowerOf2(n: number): boolean {
    const targetCount: string = countDigits(n)

    for (let i: number = 0; i < 31; i++) {
        if (countDigits(1 << i) === targetCount) {
            return true
        }
    }

    return false
}

function countDigits(num: number): string {
    const digits: number[] = arrayOfZeros(10)

    while (num > 0) {
        digits[num % 10]++
        num = Math.floor(num / 10)
    }

    return digits.join(',')
}

