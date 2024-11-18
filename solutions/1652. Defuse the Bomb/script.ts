import {arrayOfZeros} from "../../common/array-factories"

export {decrypt}

function decrypt(code: number[], k: number): number[] {
    const result: number[] = arrayOfZeros(code.length)

    if (k == 0) {
        return result
    }

    for (let i: number = 0; i < result.length; i++) {
        if (k > 0) {
            for (let j: number = i + 1; j < i + k + 1; j++) {
                result[i] += code[j % code.length]
            }
        } else {
            for (let j: number = i - Math.abs(k); j < i; j++) {
                result[i] += code[(j + code.length) % code.length]
            }
        }
    }

    return result
}
