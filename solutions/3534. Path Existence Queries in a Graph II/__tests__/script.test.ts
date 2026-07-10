import {pathExistenceQueries} from '../script'

describe('3534. Path Existence Queries in a Graph II', (): void => {
    it('directly connected nodes within maxDiff', (): void => {
        const nodeCount: number = 5
        const nums: number[] = [1, 8, 3, 4, 2]
        const maxDifference: number = 3
        const queries: number[][] = [[0, 3], [2, 4]]

        const result: number[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([1, 1])
    })

    it('mix of direct, transitive and unreachable queries', (): void => {
        const nodeCount: number = 5
        const nums: number[] = [5, 3, 1, 9, 10]
        const maxDifference: number = 2
        const queries: number[][] = [[0, 1], [0, 2], [2, 3], [4, 3]]

        const result: number[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([1, 2, -1, 1])
    })

    it('no edges when every pairwise difference exceeds maxDiff', (): void => {
        const nodeCount: number = 3
        const nums: number[] = [3, 6, 1]
        const maxDifference: number = 1
        const queries: number[][] = [[0, 0], [0, 1], [1, 2]]

        const result: number[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([0, -1, -1])
    })

    it('single node graph', (): void => {
        const nodeCount: number = 1
        const nums: number[] = [5]
        const maxDifference: number = 0
        const queries: number[][] = [[0, 0]]

        const result: number[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([0])
    })

    it('duplicate values connect directly regardless of order', (): void => {
        const nodeCount: number = 3
        const nums: number[] = [4, 4, 9]
        const maxDifference: number = 0
        const queries: number[][] = [[0, 1], [1, 2]]

        const result: number[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([1, -1])
    })

    it('every node reachable in one hop when maxDiff spans the whole range', (): void => {
        const nodeCount: number = 5
        const nums: number[] = [1, 2, 3, 4, 100]
        const maxDifference: number = 100
        const queries: number[][] = [[0, 4], [1, 3]]

        const result: number[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([1, 1])
    })

    it('unsorted nums still resolves shortest hop count through sorted order', (): void => {
        const nodeCount: number = 6
        const nums: number[] = [10, 1, 4, 20, 7, 13]
        const maxDifference: number = 3
        const queries: number[][] = [[0, 1], [1, 3]]

        const result: number[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([3, -1])
    })
})
