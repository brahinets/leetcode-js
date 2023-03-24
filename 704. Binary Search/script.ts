export {search}

function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length;

    while (left < right) {
        const mid: number = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid
        } else if(nums[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}