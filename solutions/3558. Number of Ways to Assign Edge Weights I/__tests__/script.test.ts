import {assignEdgeWeights} from '../script'

describe('3558. Number of Ways to Assign Edge Weights I', (): void => {
    it('single edge admits exactly one odd assignment', (): void => {
        const edges: number[][] = [[1, 2]]

        const result: number = assignEdgeWeights(edges)

        expect(result).toBe(1)
    })

    it('straight chain of three edges yields four odd assignments', (): void => {
        const edges: number[][] = [[1, 2], [2, 3], [3, 4]]

        const result: number = assignEdgeWeights(edges)

        expect(result).toBe(4)
    })

    it('branching tree counts only the deepest path length', (): void => {
        const edges: number[][] = [[1, 2], [1, 3], [3, 4], [4, 5]]

        const result: number = assignEdgeWeights(edges)

        expect(result).toBe(4)
    })

    it('star shaped tree has depth one', (): void => {
        const edges: number[][] = [[1, 2], [1, 3], [1, 4]]

        const result: number = assignEdgeWeights(edges)

        expect(result).toBe(1)
    })

    it('two level chain doubles the count', (): void => {
        const edges: number[][] = [[1, 2], [2, 3]]

        const result: number = assignEdgeWeights(edges)

        expect(result).toBe(2)
    })

    it('large depth result is taken modulo ten to the nine plus seven', (): void => {
        const edges: number[][] = []

        for (let node: number = 1; node < 100000; node++) {
            edges.push([node, node + 1])
        }

        const result: number = assignEdgeWeights(edges)

        expect(result).toBe(151930880)
    })
})
