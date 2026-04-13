export { getMinDistance }

function getMinDistance(nums: number[], target: number, start: number): number {
    let minimumDistance: number = Number.MAX_SAFE_INTEGER

    for (let index: number = 0; index < nums.length; index++) {
        if (nums[index] === target) {
            minimumDistance = Math.min(minimumDistance, Math.abs(index - start))
        }
    }

    return minimumDistance
}