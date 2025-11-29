export {minOperations}

function minOperations(nums: number[], k: number): number {
    let sum: number = 0

    for (let num of nums) {
        sum += num
    }

    return sum % k
}
