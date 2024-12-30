import {arrayOfZeros} from "../../common/array-factories"

export {countGoodStrings}

const MOD: number = 10 ** 9 + 7

function countGoodStrings(minLength: number, maxLength: number, zerosCount: number, onesCount: number): number {
    const validCombinations: number[] = arrayOfZeros(maxLength + 1)
    validCombinations[0] = 1

    for (let length: number = 1; length <= maxLength; length++) {
        if (length >= zerosCount) {
            validCombinations[length] = (validCombinations[length] + validCombinations[length - zerosCount]) % MOD
        }

        if (length >= onesCount) {
            validCombinations[length] = (validCombinations[length] + validCombinations[length - onesCount]) % MOD
        }
    }

    let result: number = 0
    for (let length: number = minLength; length <= maxLength; length++) {
        result = (result + validCombinations[length]) % MOD
    }

    return result
}
