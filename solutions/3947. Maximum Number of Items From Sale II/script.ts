import { arrayOfZeros } from '../../common/array-factories'

export { maximumSaleItems }

interface BoostedBatch {
    price: number
    limit: number
}

function maximumSaleItems(items: number[][], budget: number): number {
    const freeCopyLimits: number[] = countFreeCopyLimits(items)
    const minimumPrice: number = findMinimumPrice(items)
    const boostedBatches: BoostedBatch[] =
        collectBoostedBatches(items, freeCopyLimits, minimumPrice)

    let remainingBudget: number = budget
    let boostedCopies: number = 0

    for (const batch of boostedBatches) {
        if (remainingBudget < batch.price) {
            break
        }

        const takenCopies: number = Math.min(
            batch.limit,
            Math.floor(remainingBudget / batch.price)
        )

        boostedCopies += takenCopies
        remainingBudget -= takenCopies * batch.price
    }

    const plainCopies: number = Math.floor(remainingBudget / minimumPrice)

    return boostedCopies * 2 + plainCopies
}

function countFreeCopyLimits(items: number[][]): number[] {
    let maximumFactor: number = 0

    for (const item of items) {
        maximumFactor = Math.max(maximumFactor, item[0])
    }

    const factorCounts: number[] = arrayOfZeros(maximumFactor + 1)

    for (const item of items) {
        factorCounts[item[0]] += 1
    }

    const divisibleTotals: number[] = arrayOfZeros(maximumFactor + 1)

    for (let factor: number = 1; factor <= maximumFactor; factor++) {
        for (
            let multiple: number = factor;
            multiple <= maximumFactor;
            multiple += factor
        ) {
            divisibleTotals[factor] += factorCounts[multiple]
        }
    }

    const freeCopyLimits: number[] = []

    for (const item of items) {
        freeCopyLimits.push(divisibleTotals[item[0]] - 1)
    }

    return freeCopyLimits
}

function findMinimumPrice(items: number[][]): number {
    let minimumPrice: number = Number.POSITIVE_INFINITY

    for (const item of items) {
        if (item[1] < minimumPrice) {
            minimumPrice = item[1]
        }
    }

    return minimumPrice
}

function collectBoostedBatches(
    items: number[][],
    freeCopyLimits: number[],
    minimumPrice: number
): BoostedBatch[] {
    const doubledMinimumPrice: number = minimumPrice * 2
    const boostedBatches: BoostedBatch[] = []

    for (let index: number = 0; index < items.length; index++) {
        const freeCopyLimit: number = freeCopyLimits[index]
        const price: number = items[index][1]

        if (freeCopyLimit > 0 && price < doubledMinimumPrice) {
            boostedBatches.push({ price: price, limit: freeCopyLimit })
        }
    }

    boostedBatches.sort(
        (first: BoostedBatch, second: BoostedBatch): number =>
            first.price - second.price
    )

    return boostedBatches
}
