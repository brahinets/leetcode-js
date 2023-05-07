export {numSubseq}

function numSubseq(nums: number[], target: number): number {
    nums.sort((a: number, b: number): number => a - b);

    let answer: number = 0;
    const mod: number = 1e9 + 7;
    for (let left: number = 0; left < nums.length; left++) {
        const right: number = binarySearch(nums, target - nums[left]) - 1;
        if (left <= right) {
            const validCombinationsBetween: number = 2 ** (right - left) % mod;
            answer = (answer + validCombinationsBetween) % mod;
        }
    }

    return answer;
}

function binarySearch(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);

        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}