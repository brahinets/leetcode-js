export {maximumCandies}

function maximumCandies(candies: number[], k: number): number {
    let maxCandiesInPile: number = 0
    for (let i: number = 0; i < candies.length; i++) {
        maxCandiesInPile = Math.max(maxCandiesInPile, candies[i])
    }

    let left: number = 0
    let right: number = maxCandiesInPile

    while (left < right) {
        const middle: number = Math.floor((left + right + 1) / 2)

        if (canAllocateCandies(candies, k, middle)) {
            left = middle
        } else {
            right = middle - 1
        }
    }

    return left
}

function canAllocateCandies(candies: number[], k: number, numOfCandies: number): boolean {
    let maxNumOfChildren: number = 0

    for (let pileIndex: number = 0; pileIndex < candies.length; pileIndex++) {
        maxNumOfChildren += Math.floor(candies[pileIndex] / numOfCandies)
    }

    return maxNumOfChildren >= k
}
