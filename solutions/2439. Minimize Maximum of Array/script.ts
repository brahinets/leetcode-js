export {minimizeArrayValue}

function minimizeArrayValue(nums: number[]): number {
    let prefixSum: number = 0;
    let max: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        max = Math.max(max, Math.floor((prefixSum + i) / (i + 1)));
    }

    return max;
}