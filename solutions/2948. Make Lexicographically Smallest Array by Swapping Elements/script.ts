export {lexicographicallySmallestArray}

function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const numsSorted: number[] = [...nums].sort((a: number, b: number): number => b - a)
    let currGroup: number = 0

    const numToGroup: Map<number, number> = new Map<number, number>([[numsSorted[0], currGroup]])
    const groupToList: Map<number, number[]> = new Map<number, number[]>([[currGroup, [numsSorted[0]]]])

    for (let i: number = 1; i < nums.length; i++) {
        if (Math.abs(numsSorted[i] - numsSorted[i - 1]) > limit) {
            currGroup++
        }
        numToGroup.set(numsSorted[i], currGroup)

        if (!groupToList.has(currGroup)) {
            groupToList.set(currGroup, [])
        }
        groupToList.get(currGroup)!.push(numsSorted[i])
    }

    for (let i: number = 0; i < nums.length; i++) {
        const num: number = nums[i]
        const group: number = numToGroup.get(num)!

        nums[i] = groupToList.get(group)!.pop()!
    }

    return nums
}
