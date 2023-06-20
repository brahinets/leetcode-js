export {getAverages}

function getAverages(nums: number[], k: number): number[] {
    const avg: number[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        if (k <= i && i + k < nums.length) {
            const data: number[] = nums.slice(i - k, i + k + 1);
            avg.push(Math.floor(data.reduce((sum: number, n: number): number => sum + n, 0) / data.length));
        } else {
            avg.push(-1);
        }
    }

    return avg;
}
