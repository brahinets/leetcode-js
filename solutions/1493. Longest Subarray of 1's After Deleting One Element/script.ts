export {longestSubarray}

function longestSubarray(nums: number[]): number {
    let maxCount: number = 0;
    let start: number = 0;
    let end: number = 0;
    const barrierSize:number = 1;
    let brokenSize: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        end++;

        if (nums[i] !== 1) {
            if (brokenSize >= barrierSize) {
                while (nums[start] === 1) {
                    start++;
                }
                start++;
            }

            brokenSize++;
        }

        maxCount = Math.max(brokenSize >= barrierSize ? end - start - 1 : end - start, maxCount);
    }

    return brokenSize >= barrierSize ? maxCount : maxCount - 1;
}
