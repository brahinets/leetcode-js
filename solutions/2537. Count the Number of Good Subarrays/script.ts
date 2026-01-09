export {countGood}

function countGood(nums: number[], k: number): number {
    const countMap: Map<number, number> = new Map<number, number>()
    let left: number = 0
    let pairs: number = 0
    let count: number = 0

    for (let right: number = 0; right < nums.length; right++) {
        const num: number = nums[right]
        const freq: number = countMap.get(num) || 0

        pairs += freq
        countMap.set(num, freq + 1)

        while (pairs >= k) {
            count += nums.length - right

            const leftNum: number = nums[left]
            const leftFrequency: number = countMap.get(leftNum)!

            pairs -= leftFrequency - 1

            if (leftFrequency === 1) {
                countMap.delete(leftNum)
            } else {
                countMap.set(leftNum, leftFrequency - 1)
            }

            left++
        }
    }

    return count
}
