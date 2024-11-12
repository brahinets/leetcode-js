import {arrayOfZeros} from "../../common/array-factories"

export {maximumBeauty}

function maximumBeauty(items: number[][], queries: number[]): number[] {
    items.sort((a: number[], b: number[]): number => a[0] - b[0])

    const queriesWithIndices: [number, number][] = queries
        .map((query: number, index: number): [number, number] => [query, index])
        .sort((a: [number, number], b: [number, number]): number => a[0] - b[0])

    let itemIndex: number = 0
    let maxBeauty: number = 0

    const ans: number[] = arrayOfZeros(queries.length)
    for (const [query, originalIndex] of queriesWithIndices) {
        while (itemIndex < items.length && items[itemIndex][0] <= query) {
            maxBeauty = Math.max(maxBeauty, items[itemIndex][1])
            itemIndex++
        }

        ans[originalIndex] = maxBeauty
    }

    return ans
}
