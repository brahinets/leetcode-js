export {threeSumClosest}

function threeSumClosest(nums: number[], target: number): number {
    let closestTriplet: number[] = []
    let closestDelta: number = target - sum(nums)

    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; j < nums.length; j++) {
            for (let k: number = 0; k < nums.length; k++) {
                if (i !== j && j !== k && i !== k) {
                    const triplet: number[] = [nums[i], nums[j], nums[k]]
                    const tripletDelta: number = target - sum(triplet)

                    if (closestTriplet.length === 0 || tripletDelta < closestDelta) {
                        closestTriplet = triplet
                        closestDelta = tripletDelta
                    }
                }
            }
        }
    }


    return sum(closestTriplet)
}

function sum(nums: number[]): number {
    return nums.reduce((sum: number, num: number): number => sum + num, 0)
}
