export {countPairs}

function countPairs(nums: number[], k: number): number {
    let count: number = 0

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && (i * j) % k === 0) {
                count++
            }
        }
    }

    return count
}
