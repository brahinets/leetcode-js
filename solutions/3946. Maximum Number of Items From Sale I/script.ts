import { arrayOf, arrayOfZeros } from '../../common/array-factories'

export { maximumSaleItems }

function maximumSaleItems(items: number[][], budget: number): number {
    const freeCopyCounts: number[] = countFreeCopiesPerItem(items)
    const bestValues: number[] = arrayOfZeros(budget + 1)

    for (let index: number = 0; index < items.length; index++) {
        const price: number = items[index][1]

        if (price > budget) {
            continue
        }

        const freeCopyCount: number = freeCopyCounts[index]
        const activatedValues: number[] =
            arrayOf(Number.NEGATIVE_INFINITY, budget + 1)

        for (let spent: number = price; spent <= budget; spent++) {
            activatedValues[spent] = Math.max(
                bestValues[spent - price] + 1 + freeCopyCount,
                activatedValues[spent - price] + 1
            )
        }

        for (let spent: number = 0; spent <= budget; spent++) {
            if (activatedValues[spent] > bestValues[spent]) {
                bestValues[spent] = activatedValues[spent]
            }
        }
    }

    return bestValues[budget]
}

function countFreeCopiesPerItem(items: number[][]): number[] {
    const freeCopyCounts: number[] = []

    for (let index: number = 0; index < items.length; index++) {
        let divisibleCount: number = 0

        for (let otherIndex: number = 0; otherIndex < items.length; otherIndex++) {
            if (items[otherIndex][0] % items[index][0] === 0) {
                divisibleCount++
            }
        }

        freeCopyCounts.push(divisibleCount - 1)
    }

    return freeCopyCounts
}
