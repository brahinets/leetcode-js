export {getAverages}

function getAverages(nums: number[], radius: number): number[] {
    const avg: number[] = new Array(nums.length).fill(-1);

    if (radius > nums.length) {
        return avg;
    }

    for (let i: number = 0; i < nums.length; i++) {
        if (radius <= i && i + radius < nums.length) {
            const data: number[] = nums.slice(i - radius, i + radius + 1);
            avg[i] = Math.floor(data.reduce((sum: number, n: number): number => sum + n, 0) / data.length);
        }
    }

    return avg;
}
