export {findLengthOfShortestSubarray}

function findLengthOfShortestSubarray(arr: number[]): number {
    let left: number = 0
    let right: number = arr.length - 1

    while (left < right && arr[left] <= arr[left + 1]) {
        left++
    }

    if (left === right) {
        return 0
    }

    while (right > left && arr[right] >= arr[right - 1]) {
        right--
    }

    let result: number = Math.min(arr.length - left - 1, right)

    let i: number = 0
    let j: number = right
    while (i <= left && j < arr.length) {
        if (arr[i] <= arr[j]) {
            result = Math.min(result, j - i - 1)
            i++
        } else {
            j++
        }
    }

    return result
}
