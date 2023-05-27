export {maxScore}

function maxScore(nums1: number[], nums2: number[], k: number): number {
    const data: Pair[] = doPairing(nums1, nums2)
        .sort((p1: Pair, p2: Pair): number => p2.multiplier - p1.multiplier);

    let max: number = 0;
    const subsequence: Pair[] = [];

    for (const pair of data) {
        subsequence.push(pair);
        subsequence.sort((p1: Pair, p2: Pair): number => p2.summer - p1.summer);

        if (subsequence.length > k) {
            subsequence.pop();
        }

        if (subsequence.length === k) {
            const res: number = pair.multiplier * subsequence
                .reduce((sum: number, elem: Pair): number => sum + elem.summer, 0);

            if (res > max) {
                max = res;
            }
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

class Pair {
    summer: number;
    multiplier: number;

    constructor(summer: number, multiplier: number) {
        this.summer = summer;
        this.multiplier = multiplier;
    }
}