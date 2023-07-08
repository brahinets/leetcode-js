export {putMarbles}

function putMarbles(weights: number[], k: number): number {
    if (weights.length < k) {
        throw new Error("Not enough data");
    }

    const endsIncluding: number[] = Array.from(Array(k).keys());
    const buckets: number[][] = breakOnBuckets(weights, endsIncluding);
    const costs: number[] = [buckets
        .map((b: number[]): number => b[0] + b[b.length - 1])
        .reduce((sum: number, val: number): number => sum + val, 0)];

    return Math.max(...costs) - Math.min(...costs);
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
