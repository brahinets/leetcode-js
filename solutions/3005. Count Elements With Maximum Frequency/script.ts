import {count} from "../../common/array-utils"

export {maxFrequencyElements}

function maxFrequencyElements(nums: number[]): number {
    const counts: Map<number, number> = count(nums)

    const maxFrequency: number = Math.max(...counts.values())

    return [...counts.entries()]
        .filter(([, count]: [number, number]): boolean => maxFrequency === count)
        .map(([, count]: [number, number]): number => count)
        .reduce((sum: number, count: number): number => sum + count, 0)
}
