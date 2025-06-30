import {arrayOfZeros} from "../../common/array-factories"

export {multiply}

function multiply(num1: string, num2: string): string {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }

    const zeroCharCode = '0'.charCodeAt(0)
    const result: number[] = arrayOfZeros(num1.length + num2.length)

    for (let i: number = num1.length - 1; i >= 0; i--) {
        for (let j: number = num2.length - 1; j >= 0; j--) {
            const digit1: number = num1.charCodeAt(i) - zeroCharCode
            const digit2: number = num2.charCodeAt(j) - zeroCharCode
            const product: number = digit1 * digit2
            const sum: number = product + result[i + j + 1]

            result[i + j + 1] = sum % 10

            result[i + j] += Math.floor(sum / 10)
        }
    }

    return result.join('').replace(/^0+/, '') || '0'
}
