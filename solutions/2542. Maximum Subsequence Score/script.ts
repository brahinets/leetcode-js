export {maxScore}

function maxScore(nums1: number[], nums2: number[], k: number): number {
    const data: Pair[] = doPairing(nums1, nums2)
        .sort((p1: Pair, p2: Pair): number => p2.multiplier - p1.multiplier);

    let max: number = 0;
    let sum: number = 0;
    const subsequence: Pair[] = [];

    for (const pair of data) {
        sum += pair.summer;

        let deleted: number | null = insertSorted(subsequence, k, pair);
        if (deleted) {
            sum -= deleted;
        }

        if (subsequence.length === k) {
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

function insertSorted(subsequence: Pair[], limit: number, pair: Pair): number | null {
    let i: number = 0;
    while (i < subsequence.length && pair.summer > subsequence[i].summer) {
        i++;
    }
    subsequence.splice(i, 0, pair);

    if (subsequence.length > limit) {
        let pairs: Pair[] = subsequence.splice(0, 1);
        return pairs[0]?.summer;
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