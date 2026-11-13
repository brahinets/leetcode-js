export { countNonDecreasingSubarrays }

interface SegmentProfile {
    values: Float64Array
    counts: Float64Array
    sums: Float64Array
    headIndex: number
    tailIndex: number
    totalCost: number
}

function countNonDecreasingSubarrays(nums: number[], k: number): number {
    const length: number = nums.length
    const profile: SegmentProfile = {
        values: new Float64Array(length + 1),
        counts: new Float64Array(length + 1),
        sums: new Float64Array(length + 1),
        headIndex: length,
        tailIndex: length - 1,
        totalCost: 0
    }
    let right: number = length - 1
    let answer: number = 0

    for (let left = length - 1; left >= 0; left--) {
        prependElement(profile, nums, left)

        while (profile.totalCost > k && right > left) {
            removeRightElement(profile, nums, right)
            right--
        }

        while (right + 1 < length) {
            const nextValue: number = nums[right + 1]
            const tailValue: number = profile.values[profile.tailIndex]
            const delta: number =
                nextValue >= tailValue ? 0 : tailValue - nextValue

            if (profile.totalCost + delta > k) {
                break
            }

            profile.totalCost += delta

            if (nextValue > tailValue) {
                profile.tailIndex++
                profile.values[profile.tailIndex] = nextValue
                profile.counts[profile.tailIndex] = 1
                profile.sums[profile.tailIndex] = nextValue
            } else {
                profile.counts[profile.tailIndex]++
                profile.sums[profile.tailIndex] += nextValue
            }

            right++
        }

        answer += right - left + 1
    }

    return answer
}

function prependElement(
    profile: SegmentProfile,
    nums: number[],
    left: number
): void {
    const value: number = nums[left]
    let mergedCount: number = 1
    let mergedSum: number = value

    while (
        profile.headIndex <= profile.tailIndex &&
        profile.values[profile.headIndex] < value
    ) {
        const headIndex: number = profile.headIndex

        profile.totalCost -=
            profile.values[headIndex] * profile.counts[headIndex] -
            profile.sums[headIndex]
        mergedCount += profile.counts[headIndex]
        mergedSum += profile.sums[headIndex]
        profile.headIndex++
    }

    profile.headIndex--
    profile.values[profile.headIndex] = value
    profile.counts[profile.headIndex] = mergedCount
    profile.sums[profile.headIndex] = mergedSum

    if (profile.tailIndex < profile.headIndex) {
        profile.tailIndex = profile.headIndex
    }

    profile.totalCost += value * mergedCount - mergedSum
}

function removeRightElement(
    profile: SegmentProfile,
    nums: number[],
    right: number
): void {
    const tailIndex: number = profile.tailIndex

    profile.totalCost -= profile.values[tailIndex] - nums[right]
    profile.counts[tailIndex]--
    profile.sums[tailIndex] -= nums[right]

    if (profile.counts[tailIndex] === 0) {
        profile.tailIndex--
    }
}
