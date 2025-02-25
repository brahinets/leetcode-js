import {mergeNodes} from '../script'
import {linkedListOf} from "../../../common/list-factories"

describe('2181. Merge Nodes in Between Zeros', (): void => {
    it('Multiple large', (): void => {
        expect(mergeNodes(linkedListOf(0, 3, 1, 0, 4, 5, 2, 0)))
            .toEqual(linkedListOf(4, 11))
    })

    it('Multiple small', (): void => {
        expect(mergeNodes(linkedListOf(0, 1, 0, 3, 0, 2, 2, 0)))
            .toEqual(linkedListOf(1, 3, 4))
    })
})
