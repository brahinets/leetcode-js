import {arrayOfZeros} from "../../common/array-factories"

export {countLargestGroup}

function countLargestGroup(n: number): number {
    const groupCounts: number[] = arrayOfZeros(37)

    for (let i: number = 1; i <= n; i++) {
        groupCounts[digitSum(i)]++
    }

    const maxCount: number = Math.max(...groupCounts)

    return groupCounts.filter((count: number): boolean => count === maxCount).length
}

function digitSum(i: number): number {
    let sum: number = 0

    while (i > 0) {
        sum += i % 10
        i = Math.floor(i / 10)
    }

    return sum
}
