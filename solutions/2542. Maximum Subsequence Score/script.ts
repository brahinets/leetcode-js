import {SortedNumbersList} from "./SortedNumbersList";

export {maxScore}

function maxScore(nums1: number[], nums2: number[], k: number): number {
    const data: Pair[] = doPairing(nums1, nums2)
        .sort((p1: Pair, p2: Pair): number => p2.multiplier - p1.multiplier);

    let max: number = 0;
    let sum: number = 0;
    const subsequence: SortedNumbersList = new SortedNumbersList();

    for (const pair of data) {
        sum += pair.summer;

        let deleted: number | null = insertSorted(subsequence, k, pair);
        if (deleted) {
            sum -= deleted;
        }

        if (subsequence.getSize() === k) {
            max = Math.max(max, pair.multiplier * sum);
        }
    }

    return max;
}

function doPairing(nums1: number[], nums2: number[]) {
    const size: number = nums1.length;

    const result: Pair[] = [];
    for (let i: number = 0; i < size; i++) {
        result.push(new Pair(nums1[i], nums2[i]))
    }

    return result;
}

function insertSorted(subsequence: SortedNumbersList, limit: number, pair: Pair): number | null {
    subsequence.add(pair.summer);

    if (subsequence.getSize() > limit) {
        const min: number = subsequence.toArray()[0];
        subsequence.removeAt(0);
        return min;
    }

    return null;
}

class Pair {
    summer: number;
    multiplier: number;

    constructor(summer: number, multiplier: number) {
        this.summer = summer;
        this.multiplier = multiplier;
    }
}