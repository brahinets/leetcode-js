import {count} from "../../common/array-utils"

export {getSneakyNumbers}

function getSneakyNumbers(nums: number[]): number[] {
    const numCount: Map<number, number> = count(nums)
    const sneakyNumbers: number[] = []

    for (const [num, cnt] of numCount.entries()) {
        if (cnt === 2) {
            sneakyNumbers.push(num)
        }
    }

    return sneakyNumbers
}
