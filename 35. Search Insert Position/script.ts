export {searchInsert}

const searchInsert = function (nums: number[], target: number): number {
    let start: number = 0;
    let end: number = nums.length - 1;

    while (start <= end) {
        const mid: number = Math.floor((end + start) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start;
}