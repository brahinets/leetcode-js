export {getAverages}

function getAverages(nums: number[], radius: number): number[] {
    const avg: number[] = new Array(nums.length).fill(-1);

    if (radius > nums.length) {
        return avg;
    }

    const data: number[] = nums.slice(0, radius * 2 + 1);
    let sum: number = data.reduce((sum: number, n: number): number => sum + n, 0);
    avg[radius] = average(sum, data.length);
    for (let i: number = radius + 1; i < nums.length - radius; i++) {
        sum = sum - nums[i - radius - 1] + nums[i + radius];
        avg[i] = average(sum, data.length);
    }

    return avg;
}

function average(sum: number, length: number) {
    return Math.floor(sum / length);
}
