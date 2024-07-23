import {count} from "../../common/array-utils"
import {arrayOf} from "../../common/array-factories"

export {frequencySort}

function frequencySort(nums: number[]): number[] {
    const counts: Map<number, number> = count(nums)

    return [...counts.entries()]
        .sort(comparatorByFrequency)
        .map(([number, count]: [number, number]): number[] => arrayOf(number, count))
        .flatMap((numbers: number[]): number[] => numbers)
}

function comparatorByFrequency(
    [firstNumber, firstCount]: [number, number],
    [secondNumber, secondCount]: [number, number]
): number {
    const frequencyComparison: number = firstCount - secondCount

    if (frequencyComparison !== 0) {
        return frequencyComparison
    }

    return secondNumber - firstNumber
}
