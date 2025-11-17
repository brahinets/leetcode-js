export {kLengthApart}

function kLengthApart(nums: number[], k: number): boolean {
    let lastOneIndex: number = -1

    for (let i: number = 0; i < nums.length; i += 1) {
        if (nums[i] === 1) {
            if (lastOneIndex !== -1 && i - lastOneIndex - 1 < k) {
                return false
            }

            lastOneIndex = i
        }
    }

    return true

}
