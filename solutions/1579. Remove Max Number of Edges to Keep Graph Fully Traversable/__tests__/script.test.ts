import {maxNumEdgesToRemove} from '../script'

describe('1579. Remove Max Number of Edges to Keep Graph Fully Traversable', (): void => {

    it('Can remove multiple edges', (): void => {
        expect(maxNumEdgesToRemove(4, [[3, 1, 2], [3, 2, 3], [1, 1, 3], [1, 2, 4], [1, 1, 2], [2, 3, 4]]))
            .toBe(2)
    })

    it('Can remove multiple edges #2', (): void => {
        expect(maxNumEdgesToRemove(2, [[1, 1, 2], [2, 1, 2], [3, 1, 2]]))
            .toBe(2)
    })

    it('Removing any edge will make the graph not fully traversable', (): void => {
        expect(maxNumEdgesToRemove(4, [[3, 1, 2], [3, 2, 3], [1, 1, 4], [2, 1, 4]]))
            .toBe(0)
    })

    it('Impossible to make the graph fully traversable', (): void => {
        expect(maxNumEdgesToRemove(4, [[3, 2, 3], [1, 1, 2], [2, 3, 4]]))
            .toBe(-1)
    })
})
