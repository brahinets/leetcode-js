import {getAncestors} from '../script'

describe('2192. All Ancestors of a Node in a Directed Acyclic Graph', (): void => {

    it('First', (): void => {
        expect(getAncestors(8, [[0, 3], [0, 4], [1, 3], [2, 4], [2, 7], [3, 5], [3, 6], [3, 7], [4, 6]]))
            .toEqual([[], [], [], [0, 1], [0, 2], [0, 1, 3], [0, 1, 2, 3, 4], [0, 1, 2, 3]])
    })

    it('Second', (): void => {
        expect(getAncestors(5, [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]))
            .toEqual([[], [0], [0, 1], [0, 1, 2], [0, 1, 2, 3]])
    })
})
