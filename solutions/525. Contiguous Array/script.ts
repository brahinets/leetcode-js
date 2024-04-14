export {findMaxLength}

function findMaxLength(nums: number[]): number {
    let max: number = 0
    let sum: number = 0
    const memo: Map<number, number> = new Map<number, number>([[0, -1]])

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            sum++
        } else {
            sum--
        }

        if (memo.has(sum)) {
            max = Math.max(max, i - memo.get(sum)!)
        } else {
            memo.set(sum, i)
        }
    }

    return max
}
