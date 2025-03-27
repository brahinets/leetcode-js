export {minimumIndex}

function minimumIndex(nums: number[]): number {
    const firstMap: Map<number, number> = new Map<number, number>
    const secondMap: Map<number, number> = new Map<number, number>

    for (let num of nums) {
        secondMap.set(num, (secondMap.get(num) ?? 0) + 1)
    }

    for (let index = 0; index < nums.length; index++) {
        let num: number = nums[index]
        secondMap.set(num, secondMap.get(num)! - 1)
        firstMap.set(num, (firstMap.get(num) ?? 0) + 1)

        if (firstMap.get(num)! * 2 > index + 1 && secondMap.get(num)! * 2 > nums.length - index - 1) {
            return index
        }
    }

    return -1
}
