export {isArraySpecial}

function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    return queries.map(([start, end]: number[]): boolean => isSpecial(nums, start, end))
}

function isSpecial(nums: number[], start: number, end: number): boolean {
    const subArray: number[] = nums.slice(start, end + 1)
    const sortedSubArray: number[] = subArray.slice().sort((a: number, b: number): number => a - b)

    return subArray.every((value: number, index: number): boolean => value === sortedSubArray[index])
}


