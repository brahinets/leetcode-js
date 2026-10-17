import { arrayOf } from '../../common/array-factories'

export { minSwaps }

const DECIMAL_BASE: number = 10

function minSwaps(nums: number[]): number {
    const targetIndices: number[] = buildTargetIndices(nums)
    const visited: boolean[] = arrayOf(false, nums.length)
    let swaps: number = 0

    for (let index: number = 0; index < nums.length; index++) {
        if (visited[index]) {
            continue
        }

        let cycleLength: number = 0
        let current: number = index

        while (!visited[current]) {
            visited[current] = true
            current = targetIndices[current]
            cycleLength++
        }

        swaps += cycleLength - 1
    }

    return swaps
}

function buildTargetIndices(nums: number[]): number[] {
    const sortedIndices: number[] = [...nums.keys()]

    sortedIndices.sort((first: number, second: number): number =>
        compareByDigitSumThenValue(nums[first], nums[second])
    )

    const targetIndices: number[] = []

    for (
        let sortedIndex: number = 0;
        sortedIndex < sortedIndices.length;
        sortedIndex++
    ) {
        targetIndices[sortedIndices[sortedIndex]] = sortedIndex
    }

    return targetIndices
}

function compareByDigitSumThenValue(first: number, second: number): number {
    const firstDigitSum: number = digitSum(first)
    const secondDigitSum: number = digitSum(second)

    if (firstDigitSum !== secondDigitSum) {
        return firstDigitSum - secondDigitSum
    }

    return first - second
}

function digitSum(value: number): number {
    let remaining: number = value
    let total: number = 0

    while (remaining > 0) {
        total += remaining % DECIMAL_BASE
        remaining = Math.floor(remaining / DECIMAL_BASE)
    }

    return total
}
