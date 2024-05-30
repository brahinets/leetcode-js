export {countTriplets}

function countTriplets(arr: number[]): number {
    let count: number = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j; k < arr.length; k++) {
                if (valid(arr, i, j, k + 1)) {
                    count++
                }
            }
        }
    }

    return count
}

function valid(array: number[], start: number, mid: number, end: number): boolean {
    return xor(array, start, mid) === xor(array, mid, end)
}

function xor(nums: number[], start: number, end: number): number {
    let result: number = 0

    for (let i = start; i < end; i++) {
        result ^= nums[i]
    }

    return result
}
