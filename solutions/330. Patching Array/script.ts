export {minPatches}

function minPatches(nums: number[], n: number): number {
    let miss: number = 1
    let need: number = 0
    let i: number = 0

    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i]
            i++
        } else {
            miss += miss
            need++
        }
    }

    return need
}
