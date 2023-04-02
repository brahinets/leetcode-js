const runningSum = (nums: number[]): number[] => {
    const result: number[] = [];

    let sum: number = 0;
    for (let num of nums) {
        sum += num;
        result.push(sum);
    }

    return result;
}