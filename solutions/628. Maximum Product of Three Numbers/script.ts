export { maximumProduct }

function maximumProduct(nums: number[]): number {
    let largest: number = Number.NEGATIVE_INFINITY
    let secondLargest: number = Number.NEGATIVE_INFINITY
    let thirdLargest: number = Number.NEGATIVE_INFINITY
    let smallest: number = Number.POSITIVE_INFINITY
    let secondSmallest: number = Number.POSITIVE_INFINITY
    for (const value of nums) {
        if (value >= largest) {
            thirdLargest = secondLargest
            secondLargest = largest
            largest = value
        } else if (value >= secondLargest) {
            thirdLargest = secondLargest
            secondLargest = value
        } else if (value > thirdLargest) {
            thirdLargest = value
        }

        if (value <= smallest) {
            secondSmallest = smallest
            smallest = value
        } else if (value < secondSmallest) {
            secondSmallest = value
        }
    }

    return Math.max(
        largest * secondLargest * thirdLargest,
        largest * smallest * secondSmallest
    )
}
