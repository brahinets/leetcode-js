function singleNonDuplicate(nums: number[]): number {
    const counts: Map<number, number> = count(nums);

    for (let count of counts) {
        const num: number = count[0];
        const value: number = count[1];

        if (value === 1) {
            return num;
        }
    }

    throw new Error("Non duplicate not detected");
}

function count(nums: number[]): Map<number, number> {
    const counts: Map<number, number> = new Map<number, number>();

    for (const num of nums) {
        const count: number | undefined = counts.get(num);

        if (count) {
            counts.set(num, count + 1)
        } else {
            counts.set(num, 1)
        }
    }

    return counts;
}
