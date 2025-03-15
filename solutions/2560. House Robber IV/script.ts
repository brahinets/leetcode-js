export {minCapability}

function minCapability(nums: number[], k: number): number {
    let minReward: number = 1
    let maxReward: number = Math.max(...nums)
    let totalHouses: number = nums.length

    while (minReward < maxReward) {
        let midReward: number = Math.floor((minReward + maxReward) / 2)
        let possibleThefts: number = 0

        for (let index: number = 0; index < totalHouses; ++index) {
            if (nums[index] <= midReward) {
                possibleThefts += 1
                index++

            }
        }

        if (possibleThefts >= k) {
            maxReward = midReward
        } else {
            minReward = midReward + 1
        }
    }

    return minReward
}
