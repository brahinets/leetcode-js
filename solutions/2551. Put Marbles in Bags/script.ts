export {putMarbles}

function putMarbles(weights: number[], k: number): number {
    if (weights.length < k) {
        throw new Error("Not enough data");
    }

    const costs: number[] = [];

    const endsIncluding: number[][] = generateEndsIncluding(k);
    for (const ends of endsIncluding) {
        const buckets: number[][] = breakOnBuckets(weights, ends);

        costs.push(buckets
            .map((bucket: number[]): number => bucket[0] + bucket[bucket.length - 1])
            .reduce((distributionCost: number, bucketCost: number): number => distributionCost + bucketCost, 0));
    }

    return Math.max(...costs) - Math.min(...costs);
}

function generateEndsIncluding(bucketsCount: number): number[][] {
    return [Array.from(Array(bucketsCount).keys())];
}

function breakOnBuckets(weights: number[], endsIncluding: number[]) {
    const res: number[][] = [];

    let start: number = 0;
    for (const end of endsIncluding) {
        res.push(weights.slice(start, end + 1));
        start = end + 1;
    }

    return res;
}
