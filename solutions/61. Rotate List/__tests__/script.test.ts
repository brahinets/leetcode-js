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
})
