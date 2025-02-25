export {threeSumClosest}

function threeSumClosest(nums: number[], target: number): number {
    let closest: number = Number.POSITIVE_INFINITY

    for (let i: number = 0; i < nums.length - 2; i++) {
        for (let j: number = i + 1; j < nums.length - 1; j++) {
            for (let k: number = j + 1; k < nums.length; k++) {
                const current: number = nums[i] + nums[j] + nums[k]

                if (Math.abs(current - target) < Math.abs(closest - target)) {
                    closest = current
                }
            }
        }
    }

    return closest
}
