export {getAverages}

function getAverages(nums: number[], radius: number): number[] {
    const windowSize:number = radius * 2 + 1;
    const avg: number[] = new Array(nums.length).fill(-1);

    if (windowSize > nums.length) {
        return avg;
    }

    let windowSum: number = initialWindowSum(nums, windowSize);
    avg[radius] = average(windowSum, windowSize);
    for (let i: number = radius + 1; i < nums.length - radius; i++) {
        windowSum = windowSum - nums[i - radius - 1] + nums[i + radius];
        avg[i] = average(windowSum, windowSize);
    }

    return avg;
}

function initialWindowSum(nums: number[], windowSize: number): number {
    let sum: number = 0;

    for (let i: number = 0; i < windowSize; i++) {
        sum += nums[i];
    }

    return sum;
}

function average(sum: number, length: number) {
    return Math.floor(sum / length);
}
