export {kSmallestPairs}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const pairs: Array<number[]> = [];

    for (let i: number = 0; i < nums1.length; i++) {
        for (let j: number = 0; j < nums2.length; j++) {
            pairs.push([nums1[i], nums2[j]])
        }
    }

    pairs.sort((p1: number[], p2: number[]): number => (p1[0] + p1[1]) - (p2[0] + p2[1]));

    return pairs.slice(0, k);
}
