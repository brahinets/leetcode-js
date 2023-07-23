import {count} from '../../common/array-utils'

export {topKFrequent}

function topKFrequent(values: string[], k: number): string[] {
    const counting: Map<string, number> = count(values);
    values = sort(values, counting);

    const result: string[] = [];
    for (let i: number = 0; i < values.length && result.length < k; i++) {
        const word: string = values[values.length - 1 - i];

        if (!arrayContains(result, word)) {
            result.push(word);
        }
    }

    return result;
}

function arrayContains(values: string[], targetValue: string): boolean {
    return values.some((value: string): boolean => value === targetValue);
}

function sort(values: string[], counting: Map<string, number>): string[] {
    const valuesCopy: string[] = [...values];

    return valuesCopy.sort((v1: string, v2: string): number => {
        const counter: number = (counting.get(v1) ?? 0) - (counting.get(v2) ?? 0);

        if (counter !== 0) {
            return counter;
        }

        return v2.localeCompare(v1);
    })
}
