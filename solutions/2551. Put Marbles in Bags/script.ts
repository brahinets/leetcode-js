export {putMarbles}

function putMarbles(weights: number[], k: number): number {
    if (weights.length < k) {
        throw new Error("Not enough data")
    }

    const costs: number[] = []

    const endsIncluding: number[][] = generateEndsIncluding(k, weights.length)
    for (const ends of endsIncluding) {
        const buckets: number[][] = breakOnBuckets(weights, ends)

        costs.push(buckets
            .map((bucket: number[]): number => bucket[0] + bucket[bucket.length - 1])
            .reduce((distributionCost: number, bucketCost: number): number => distributionCost + bucketCost, 0))
    }

    return Math.max(...costs) - Math.min(...costs)
}

function generateEndsIncluding(bucketsCount: number, elementsCount: number): number[][] {
    const distributionBucketsEnds: number[][] = []

    for (const bitsRow of bitMatrix(elementsCount)) {
        if (bitsRow[bitsRow.length - 1] !== 1) {
            continue
        }

        const endsBucket: number[] = []
        for (let i: number = 0; i < bitsRow.length; i++) {
            if (bitsRow[i] === 1) {
                endsBucket.push(i)
            }
        }

        if (endsBucket.length === bucketsCount) {
            distributionBucketsEnds.push(endsBucket)
        }
    }

    return distributionBucketsEnds
}

function breakOnBuckets(weights: number[], endsIncluding: number[]) {
    const res: number[][] = []

    let start: number = 0
    for (const end of endsIncluding) {
        res.push(weights.slice(start, end + 1))
        start = end + 1
    }

    return res
}

function bitMatrix(n: number): number[][] {
    const result: number[][] = []
    const bits: number[] = new Array(n)

    function generate(index: number): void {
        if (index === n) {
            result.push([...bits])
            return
        }

        bits[index] = 0
        generate(index + 1)

        bits[index] = 1
        generate(index + 1)
    }

    generate(0)

    return result
}
