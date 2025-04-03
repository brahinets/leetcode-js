export {maximumTripletValue}

function maximumTripletValue(nums: number[]): number {
    let max: number = 0

    for (let i: number = 0; i < nums.length - 2; i++) {
        for (let j: number = i + 1; j < nums.length - 1; j++) {
            for (let k: number = j + 1; k < nums.length; k++) {
                max = Math.max(max, (nums[i] - nums[j]) * nums[k])
            }
        }
    }

    return max
}
