export {searchRange}

function searchRange(nums: number[], target: number): number[] {
    // TODO Speed up
    const position: number = nums.indexOf(target)

    if (position === -1) {
        return [-1, -1]
    }

    const start: number = position
    let end: number = position

    while (end + 1 < nums.length) {
        if (nums[end + 1] === target) {
            end++
        } else {
            break
        }
    }

    return [start, end]
}
