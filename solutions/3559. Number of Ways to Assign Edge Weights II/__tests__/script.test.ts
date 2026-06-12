import {assignEdgeWeights} from '../script'

describe('3559. Number of Ways to Assign Edge Weights II', (): void => {
    it('single edge with self path and adjacent path', (): void => {
        const edges: number[][] = [[1, 2]]
        const queries: number[][] = [[1, 1], [1, 2]]

        const result: number[] = assignEdgeWeights(edges, queries)

        expect(result).toEqual([0, 1])
    })

    it('branching tree with paths of varying lengths', (): void => {
        const edges: number[][] = [[1, 2], [1, 3], [3, 4], [3, 5]]
        const queries: number[][] = [[1, 4], [3, 4], [2, 5]]

        const result: number[] = assignEdgeWeights(edges, queries)

        expect(result).toEqual([2, 1, 4])
    })

    it('path between two leaves through the root', (): void => {
        const edges: number[][] = [[1, 2], [1, 3], [3, 4], [3, 5]]
        const queries: number[][] = [[2, 4]]

        const result: number[] = assignEdgeWeights(edges, queries)

        expect(result).toEqual([4])
    })

    it('path where one node is an ancestor of the other', (): void => {
        const edges: number[][] = [[1, 2], [2, 3], [3, 4]]
        const queries: number[][] = [[1, 4]]

        const result: number[] = assignEdgeWeights(edges, queries)

        expect(result).toEqual([4])
    })

    it('every query targets the same node giving zero', (): void => {
        const edges: number[][] = [[1, 2], [2, 3]]
        const queries: number[][] = [[2, 2], [3, 3]]

        const result: number[] = assignEdgeWeights(edges, queries)

        expect(result).toEqual([0, 0])
    })

    it('long chain produces a large power of two', (): void => {
        const edges: number[][] = []

        for (let node: number = 1; node <= 30; node++) {
            edges.push([node, node + 1])
        }

        const queries: number[][] = [[1, 31]]

        const result: number[] = assignEdgeWeights(edges, queries)

        expect(result).toEqual([2 ** 29])
    })
})
