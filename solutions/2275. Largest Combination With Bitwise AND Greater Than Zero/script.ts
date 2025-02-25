import {arrayOfZeros} from "../../common/array-factories"

export {largestCombination}

function largestCombination(candidates: number[]): number {
    const bitCount: number[] = arrayOfZeros(24)

    for (let i: number = 0; i < 24; i++) {
        for (const num of candidates) {
            if ((num & (1 << i)) !== 0) {
                bitCount[i]++;
            }
        }
    }

    let max: number = 0;
    for (const count of bitCount) {
        if (count > max) {
            max = count;
        }
    }

    return max;
}
