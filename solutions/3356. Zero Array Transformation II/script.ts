import {arrayOfZeros} from "../../common/array-factories"

export {minZeroArray}

function minZeroArray(nums: number[], queries: number[][]): number {
    let sum: number = 0
    let k: number = 0
    let differenceArray: number[] = arrayOfZeros(nums.length + 1)

    for (let index = 0; index < nums.length; index++) {
        while (sum + differenceArray[index] < nums[index]) {
            k++

            if (k > queries.length) {
                return -1
            }

            const left: number = queries[k - 1][0]
            const right: number = queries[k - 1][1]
            const val: number = queries[k - 1][2]

            if (right >= index) {
                differenceArray[Math.max(left, index)] += val
                differenceArray[right + 1] -= val
            }
        }

        sum += differenceArray[index]
    }

    return k
}
