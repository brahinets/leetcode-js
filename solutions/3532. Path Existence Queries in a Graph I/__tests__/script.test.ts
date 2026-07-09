import {pathExistenceQueries} from '../script'

describe('3532. Path Existence Queries in a Graph I', (): void => {
    it('same node query is always reachable', (): void => {
        const nodeCount: number = 2
        const nums: number[] = [1, 3]
        const maxDifference: number = 1
        const queries: number[][] = [[0, 0], [0, 1]]

        const result: boolean[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([true, false])
    })

    it('transitive connection through an intermediate node', (): void => {
        const nodeCount: number = 4
        const nums: number[] = [2, 5, 6, 8]
        const maxDifference: number = 2
        const queries: number[][] = [[0, 1], [0, 2], [1, 3], [2, 3]]

        const result: boolean[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([false, false, true, true])
    })

    it('single node graph', (): void => {
        const nodeCount: number = 1
        const nums: number[] = [5]
        const maxDifference: number = 0
        const queries: number[][] = [[0, 0]]

        const result: boolean[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([true])
    })

    it('zero maxDiff only connects duplicate values', (): void => {
        const nodeCount: number = 3
        const nums: number[] = [4, 4, 9]
        const maxDifference: number = 0
        const queries: number[][] = [[0, 1], [1, 2]]

        const result: boolean[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([true, false])
    })

    it('every node reachable when maxDiff spans the whole range', (): void => {
        const nodeCount: number = 5
        const nums: number[] = [1, 2, 3, 4, 100]
        const maxDifference: number = 100
        const queries: number[][] = [[0, 4], [1, 3]]

        const result: boolean[] = pathExistenceQueries(nodeCount, nums, maxDifference, queries)

        expect(result)
            .toEqual([true, true])
    })
})
