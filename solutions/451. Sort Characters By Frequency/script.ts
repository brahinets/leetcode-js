import {count} from "../../common/array-utils"

export {frequencySort}

function frequencySort(s: string): string {
    const counts: Map<string, number> = count(s.split(""))

    return [...counts.entries()]
        .sort(comparatorByFrequencyThenAlphabetically)
        .map(([letter, count]: [string, number]): string => letter.repeat(count))
        .join("")
}

function comparatorByFrequencyThenAlphabetically(
    [firstLetter, firstCount]: [string, number],
    [secondLetter, secondCount]: [string, number]
): number {
    const frequencyComparison: number = secondCount - firstCount

    if (frequencyComparison !== 0) {
        return frequencyComparison
    }

    return firstLetter.toLowerCase().localeCompare(secondLetter.toLowerCase())
}
