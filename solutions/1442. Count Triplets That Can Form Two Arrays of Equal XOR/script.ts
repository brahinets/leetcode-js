export {countTriplets}

function countTriplets(arr: number[]): number {
    let count: number = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j; k < arr.length; k++) {
                if (valid(arr.slice(i, j), arr.slice(j, k + 1))) {
                    count++
                }
            }
        }
    }

    return count
}

function valid(first: number[], second: number[]): boolean {
    return xor(first) === xor(second)
}

function xor(nums: number[]): number {
    return nums.reduce((xor: number, num: number): number => xor ^ num, 0)
}
