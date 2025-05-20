import {arrayOfZeros} from "../../common/array-factories"

export {isZeroArray}

function isZeroArray(nums: number[], queries: number[][]): boolean {
    const deltaArray: number[] = arrayOfZeros(nums.length + 1)
    for (const [left, right] of queries) {
        deltaArray[left] += 1
        deltaArray[right + 1] -= 1
    }

    const operationCounts: number[] = []
    let currentOperations: number = 0
    for (const delta of deltaArray) {
        currentOperations += delta

        operationCounts.push(currentOperations)
    }

    for (let i: number = 0; i < nums.length; i++) {
        if (operationCounts[i] < nums[i]) {
            return false
        }
    }

    return true
}
