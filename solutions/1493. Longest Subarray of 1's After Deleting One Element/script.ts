export {longestSubarray}

function longestSubarray(nums: number[]): number {
    let maxCount: number = 0;
    const window: number[] = [];
    let broken: boolean = false;

    for (let i: number = 0; i < nums.length; i++) {
        window.push(nums[i]);

        if (nums[i] !== 1) {
            if (broken) {
                while (window.length && window[0] === 1) {
                    window.shift();
                }
                window.shift();
            }

            broken = true;
        }

        maxCount = Math.max(broken ? window.length - 1 : window.length, maxCount);
    }

    return maxCount === nums.length ? maxCount - 1 : maxCount;
}
