import {count} from "../../common/array-utils"
import {arrayOf} from "../../common/array-factories"

export {frequencySort}

function frequencySort(nums: number[]): number[] {
    return [...count(nums).entries()]
        .sort(comparatorByFrequency)
        .flatMap(([number, count]: [number, number]): number[] => arrayOf(number, count))
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
