export { uniqueXorTriplets }

const VALUE_CAPACITY: number = 2048

function uniqueXorTriplets(nums: number[]): number {
    const distinctValues: number[] = collectDistinctValues(nums)
    const pairwiseXorValues: number[] = collectPairwiseXorValues(distinctValues)
    const isTripletReachable: Uint8Array = new Uint8Array(VALUE_CAPACITY)
    let uniqueCount: number = 0
    for (const pairwiseXor of pairwiseXorValues) {
        for (const value of distinctValues) {
            const tripletXor: number = pairwiseXor ^ value
            if (isTripletReachable[tripletXor] === 0) {
                isTripletReachable[tripletXor] = 1
                uniqueCount++
            }
        }
    }

    return uniqueCount
}

function collectDistinctValues(nums: number[]): number[] {
    const isValuePresent: Uint8Array = new Uint8Array(VALUE_CAPACITY)
    const distinctValues: number[] = []
    for (const value of nums) {
        if (isValuePresent[value] === 0) {
            isValuePresent[value] = 1
            distinctValues.push(value)
        }
    }

    return distinctValues
}

function collectPairwiseXorValues(distinctValues: number[]): number[] {
    const isPairwiseReachable: Uint8Array = new Uint8Array(VALUE_CAPACITY)
    const pairwiseXorValues: number[] = []
    for (const first of distinctValues) {
        for (const second of distinctValues) {
            const pairwiseXor: number = first ^ second
            if (isPairwiseReachable[pairwiseXor] === 0) {
                isPairwiseReachable[pairwiseXor] = 1
                pairwiseXorValues.push(pairwiseXor)
            }
        }
    }

    return pairwiseXorValues
}
