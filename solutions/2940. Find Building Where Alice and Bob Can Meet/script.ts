import {PriorityQueue} from "../../common/PriorityQueue"
import {arrayOf} from "../../common/array-factories"

export {leftmostBuildingQueries}

function leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
    const storeQueries: number[][][] = arrayOf([], heights.length)

    const maxIndex: PriorityQueue<number[]> = new PriorityQueue<number[]>(
        (a: number[], b: number[]): number => a[0] - b[0]
    )

    const result: number[] = arrayOf(-1, queries.length)
    for (let currQuery: number = 0; currQuery < queries.length; currQuery++) {
        const a: number = queries[currQuery][0]
        const b: number = queries[currQuery][1]

        if (a < b && heights[a] < heights[b]) {
            result[currQuery] = b
        } else if (a > b && heights[a] > heights[b]) {
            result[currQuery] = a
        } else if (a == b) {
            result[currQuery] = a
        } else {
            storeQueries[Math.max(a, b)].push([Math.max(heights[a], heights[b]), currQuery])
        }
    }

    for (let index: number = 0; index < heights.length; index++) {
        while (!maxIndex.isEmpty() && maxIndex.peek()![0] < heights[index]) {
            result[maxIndex.peek()![1]] = index
            maxIndex.dequeue()
        }

        for (let element of storeQueries[index]!) {
            maxIndex.enqueue(element)
        }
    }

    return result
}
