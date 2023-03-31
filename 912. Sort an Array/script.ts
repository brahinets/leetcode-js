export {sortArray}

const sortArray = (nums: number[]): number[] => {
    return mergeSort(nums);
};

const mergeSort = (nums: number[]): number[] => {
    if (nums.length <= 1) {
        return nums;
    }

    const mid: number = Math.floor(nums.length / 2);
    const left: number[] = mergeSort(nums.slice(0, mid));
    const right: number[] = mergeSort(nums.slice(mid));

    return merge(left, right);
}

const merge = (left: number[], right: number[]): number[] => {
    const sorted: number[] = [];

    while (left.length && right.length) {
        const val: number | undefined = left[0] < right[0] ? left.shift() : right.shift();

        if (val === undefined) {
            throw new Error("Illegal state")
        }

        sorted.push(val);
    }

    return [...sorted, ...left, ...right];
}