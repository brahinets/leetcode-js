export {numberOfArrays}

function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let minPrefixSum: number = 0
    let maxPrefixSum: number = 0

    let prefixSum: number = 0
    for (let difference of differences) {
        prefixSum += difference

        minPrefixSum = Math.min(minPrefixSum, prefixSum)
        maxPrefixSum = Math.max(maxPrefixSum, prefixSum)

        if (maxPrefixSum - minPrefixSum > upper - lower) {
            return 0
        }
    }

    return upper - lower - (maxPrefixSum - minPrefixSum) + 1
}
