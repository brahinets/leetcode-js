export {getAverages}

function getAverages(nums: number[], radius: number): number[] {
    const avg: number[] = new Array(nums.length).fill(-1);

    if (radius > nums.length) {
        return avg;
    }

    let sum: number = initialWindowSum(nums, radius);
    avg[radius] = average(sum, radius * 2 + 1);
    for (let i: number = radius + 1; i < nums.length - radius; i++) {
        sum = sum - nums[i - radius - 1] + nums[i + radius];
        avg[i] = average(sum, radius * 2 + 1);
    }

    return avg;
}

function initialWindowSum(nums: number[], radius: number): number {
    const data: number[] = nums.slice(0, radius * 2 + 1);
    return data.reduce((sum: number, n: number): number => sum + n, 0);
}

function average(sum: number, length: number) {
    return Math.floor(sum / length);
}
