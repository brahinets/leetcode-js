export {getAverages}

function getAverages(nums: number[], radius: number): number[] {
    const avg: number[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        if (radius <= i && i + radius < nums.length) {
            const data: number[] = nums.slice(i - radius, i + radius + 1);
            avg.push(Math.floor(data.reduce((sum: number, n: number): number => sum + n, 0) / data.length));
        } else {
            avg.push(-1);
        }
    }

    return avg;
}
