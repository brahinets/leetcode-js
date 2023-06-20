export {getAverages}

function getAverages(nums: number[], radius: number): number[] {
    const avg: number[] = new Array(nums.length).fill(-1);

    if (radius * 2 + 1 > nums.length) {
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
    let sum: number = 0;

    for (let i: number = 0; i < radius * 2 + 1; i++) {
        sum += nums[i];
    }

    return sum;
}

function average(sum: number, length: number) {
    return Math.floor(sum / length);
}
