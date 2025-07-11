export {jump}

function jump(nums: number[]): number {
    let jumps: number = 0
    let currentEnd: number = 0
    let farthest: number = 0

    for (let i: number = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i])

        if (i === currentEnd) {
            jumps++
            currentEnd = farthest
        }
    }

    return jumps
}
