import {linkedListOf} from "../../../common/list-factories"
import {rotateRight} from "../script"

describe('61. Rotate List', (): void => {
    it('One', (): void => {
        expect(rotateRight(linkedListOf(1, 2, 3, 4, 5), 2))
            .toEqual(linkedListOf(4, 5, 1, 2, 3))
    })

    it('Two', (): void => {
        expect(rotateRight(linkedListOf(0, 1, 2), 4))
            .toEqual(linkedListOf(2, 0, 1))
    })

    it('Empty list', (): void => {
        expect(rotateRight(null, 3))
            .toBeNull()
    })

    it('Single node', (): void => {
        expect(rotateRight(linkedListOf(1), 5))
            .toEqual(linkedListOf(1))
    })

    it('Zero rotation', (): void => {
        expect(rotateRight(linkedListOf(1, 2, 3), 0))
            .toEqual(linkedListOf(1, 2, 3))
    })

    it('Full rotation equals length', (): void => {
        expect(rotateRight(linkedListOf(1, 2, 3), 3))
            .toEqual(linkedListOf(1, 2, 3))
    })

    it('k is multiple of length', (): void => {
        expect(rotateRight(linkedListOf(1, 2, 3), 6))
            .toEqual(linkedListOf(1, 2, 3))
    })
})
