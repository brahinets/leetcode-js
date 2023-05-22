import {count} from '../../common/array-utils'

export {topKFrequent}

function topKFrequent(words: string[], k: number): string[] {
    const counting: Map<string, number> = count(words);
    words = sort(words, counting);

    const result: string[] = [];
    let i: number = 0;
    while (result.length < k && i < words.length) {
        const word: string = words[words.length - 1 - i];

        if (!arrayContains(result, word)) {
            result.push(word);
        }

        i++;
    }

    return result;
}

function arrayContains(words: string[], targetWord: string): boolean {
    return words.some((word: string): boolean => word === targetWord);
}

function sort(words: string[], counting: Map<string, number>): string[] {
    const strings: string[] = [...words];

    return strings.sort((s1: string, s2: string): number => {
        let counter: number = (counting.get(s1) || 0) - (counting.get(s2) || 0);

        if (counter !== 0) {
            return counter;
        }

        return s2.localeCompare(s1);
    })
}