export {minimizeArrayValue}

function minimizeArrayValue(nums: number[]): number {
    let swapped: boolean;
    do {
        swapped = false;

        for (let i: number = 1; i < nums.length; i++) {
            if (nums[i - 1] < nums[i]) {
                nums[i]--;
                nums[i - 1]++;
                swapped = true;
            }
        }
    } while (swapped)

    return Math.max(...nums);
}