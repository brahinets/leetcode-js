import {Graph} from '../script'

describe('2642. Design Graph With Shortest Path Calculator', (): void => {
    it('Test', (): void => {
        const g: Graph = new Graph(4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]])

        expect(g.shortestPath(3, 2)).toBe(6)
        expect(g.shortestPath(0, 3)).toBe(-1)

        g.addEdge([1, 3, 4])
        expect(g.shortestPath(0, 3)).toBe(6)
    })
})
