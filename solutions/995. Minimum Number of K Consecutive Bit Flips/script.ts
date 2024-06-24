export {minKBitFlips}

const FLIPPED: number = -1

function minKBitFlips(nums: number[], k: number): number {
    let currentFlips: number = 0
    let totalFlips: number = 0

    for (let i: number = 0; i < nums.length; i++) {
        if (i >= k && nums[i - k] === FLIPPED) {
            currentFlips--
        }

        if (currentFlips % 2 === nums[i]) {
            if (i + k > nums.length) {
                return -1
            }

            nums[i] = FLIPPED
            currentFlips++
            totalFlips++
        }
    }

    return totalFlips
}
