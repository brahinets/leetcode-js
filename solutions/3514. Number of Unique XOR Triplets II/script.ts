export { uniqueXorTriplets }

function uniqueXorTriplets(nums: number[]): number {
    const distinctValues: number[] = [...new Set<number>(nums)]
    const pairwiseXorValues: number[] = collectPairwiseXorValues(distinctValues)
    const tripletXorValues: Set<number> = new Set<number>()
    for (const pairwiseXor of pairwiseXorValues) {
        for (const value of distinctValues) {
            tripletXorValues.add(pairwiseXor ^ value)
        }
    }

    return tripletXorValues.size
}

function collectPairwiseXorValues(distinctValues: number[]): number[] {
    const pairwiseXorValues: Set<number> = new Set<number>()
    for (const first of distinctValues) {
        for (const second of distinctValues) {
            pairwiseXorValues.add(first ^ second)
        }
    }

    return [...pairwiseXorValues]
}
