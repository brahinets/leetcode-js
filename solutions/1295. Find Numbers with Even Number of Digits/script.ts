export {findNumbers}

function findNumbers(nums: number[]): number {
    let count: number = 0

    for (const num of nums) {
        if (num.toString().length % 2 === 0) {
            count++
        }
    }

    return count
}
