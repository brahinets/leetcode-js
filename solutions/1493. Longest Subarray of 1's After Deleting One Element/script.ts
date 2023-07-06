export {longestSubarray}

function longestSubarray(nums: number[]): number {
    let maxCount: number = 0;
    let start: number = 0;
    let end: number = 0;
    let broken: boolean = false;

    for (let i: number = 0; i < nums.length; i++) {
        end++;

        if (nums[i] !== 1) {
            if (broken) {
                while (nums[start] === 1) {
                    start++;
                }
                start++;
            }

            broken = true;
        }

        maxCount = Math.max(broken ? end - start - 1 : end - start, maxCount);
    }

    return broken ? maxCount : maxCount - 1;
}
