import {arrayOfZeros} from "../../common/array-utils";

export {countGoodStrings}

function countGoodStrings(minLength: number, maxLength: number, zerosCount: number, onesCount: number): number {
    const mod: number = 1e9 + 7;
    const validCombinations: number[] = arrayOfZeros(maxLength + 1);
    validCombinations[0] = 1;

    for (let length: number = 1; length <= maxLength; length++) {
        if (length >= zerosCount) {
            validCombinations[length] += validCombinations[length - zerosCount] % mod;
        }

        if (length >= onesCount) {
            validCombinations[length] += validCombinations[length - onesCount] % mod;
        }
    }

    return validCombinations
        .slice(minLength)
        .reduce((prev: number, sum: number): number => (prev + sum) % mod, 0);
}