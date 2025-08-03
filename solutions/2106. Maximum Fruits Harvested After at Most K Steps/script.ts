import {arrayOfZeros} from "../../common/array-factories"

export {maxTotalFruits}

function maxTotalFruits(fruits: number[][], startPos: number, k: number): number {
    const sum: number[] = arrayOfZeros(fruits.length + 1)
    const indices: number[] = arrayOfZeros(fruits.length)
    for (let i: number = 0; i < fruits.length; i++) {
        sum[i + 1] = sum[i] + fruits[i][1]
        indices[i] = fruits[i][0]
    }

    let maxTotal: number = 0
    for (let x: number = 0; x <= Math.floor(k / 2); x++) {
        let y: number = k - 2 * x
        let left: number = startPos - x
        let right: number = startPos + y
        let start: number = lowerBound(indices, 0, fruits.length - 1, left)
        let end: number = upperBound(indices, 0, fruits.length - 1, right)

        maxTotal = Math.max(maxTotal, sum[end] - sum[start])
        y = k - 2 * x

        left = startPos - y
        right = startPos + x

        start = lowerBound(indices, 0, fruits.length - 1, left)
        end = upperBound(indices, 0, fruits.length - 1, right)

        maxTotal = Math.max(maxTotal, sum[end] - sum[start])
    }

    return maxTotal
}

function lowerBound(arr: number[], left: number, right: number, val: number): number {
    let res: number = right + 1

    while (left <= right) {
        const mid: number = left + Math.floor((right - left) / 2)

        if (arr[mid] >= val) {
            res = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return res
}

function upperBound(arr: number[], left: number, right: number, val: number): number {
    let res: number = right + 1

    while (left <= right) {
        const mid: number = left + Math.floor((right - left) / 2)

        if (arr[mid] > val) {
            res = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return res
}
