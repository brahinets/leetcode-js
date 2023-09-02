import {count} from '../../common/array-utils'

export {topKFrequent}

function topKFrequent(values: number[], k: number): number[] {
    const counting: Map<number, number> = count(values)
    values = sort(values, counting)

    const result: number[] = []
    for (let i: number = 0; i < values.length && result.length < k; i++) {
        const num: number = values[values.length - 1 - i]

        if (!arrayContains(result, num)) {
            result.push(num)
        }
    }

    return result
}

function arrayContains(values: number[], targetValue: number): boolean {
    return values.some((value: number): boolean => value === targetValue)
}

function sort(values: number[], counting: Map<number, number>): number[] {
    const valuesCopy: number[] = [...values]

    return valuesCopy.sort((v1: number, v2: number): number => {
        let counter: number = (counting.get(v1) || 0) - (counting.get(v2) || 0)

        if (counter !== 0) {
            return counter
        }

        return 1
    })
}
