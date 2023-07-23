import {count} from '../../common/array-utils'

export {topKFrequent}

function topKFrequent(values: string[], k: number): string[] {
    values = sort(values);

    const result: string[] = [];
    for (let i: number = 0; i < values.length && result.length < k; i++) {
        const word: string = values[values.length - 1 - i];

        if (!result.includes(word)) {
            result.push(word);
        }
    }

    return result;
}

function sort(values: string[]): string[] {
    const counting: Map<string, number> = count(values);

    return [...values].sort((v1: string, v2: string): number => {
        const counter: number = (counting.get(v1) ?? 0) - (counting.get(v2) ?? 0);

        if (counter !== 0) {
            return counter;
        }

        return v2.localeCompare(v1);
    })
}
