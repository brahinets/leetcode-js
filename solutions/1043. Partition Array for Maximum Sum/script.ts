import {arrayOfZeros} from "../../common/array-factories"

export {maxSumAfterPartitioning}

function maxSumAfterPartitioning(arr: number[], k: number): number {
    const maxSumAchievableFromIndex: number[] = arrayOfZeros(arr.length + 1)

    for (let from: number = arr.length - 1; from >= 0; from--) {
        const to: number = Math.min(arr.length, from + k)

        let subArrayMax: number = 0
        for (let subArrayEnd: number = from; subArrayEnd < to; subArrayEnd++) {
            const subArrayLength: number = subArrayEnd - from + 1
            subArrayMax = Math.max(subArrayMax, arr[subArrayEnd])

            const valueWithSubArray:number = maxSumAchievableFromIndex[subArrayEnd + 1] + subArrayMax * subArrayLength
            maxSumAchievableFromIndex[from] = Math.max(maxSumAchievableFromIndex[from], valueWithSubArray)
        }
    }

    return maxSumAchievableFromIndex[0]
}
