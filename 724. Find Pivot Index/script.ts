function sum(a: number, b: number): number {
    return a + b;
}

function pivotIndex(nums: number[]): number {
    for (let index: number = 0; index < nums.length; index++) {
        const left: number = nums.slice(0, index).reduce(sum, 0);
        const right: number = nums.slice(index + 1).reduce(sum, 0);

        if (left === right) {
            return index;
        }
    }

    return -1;
}