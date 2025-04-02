export {maximumTripletValue}

function maximumTripletValue(nums: number[]): number {
    const n: number = nums.length
    let maxValue: number = 0

    for (let i: number = 0; i < n; i++) {
        for (let j: number = i + 1; j < n; j++) {
            for (let k: number = j + 1; k < n; k++) {
                const value: number = (nums[i] - nums[j]) * nums[k]

                maxValue = Math.max(maxValue, value)
            }
        }
    }

    return maxValue
}
