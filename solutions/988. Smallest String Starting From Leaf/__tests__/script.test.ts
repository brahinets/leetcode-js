import {arrayToTree} from "../../../common/tree-utils"
import {smallestFromLeaf} from "../script"

describe('988. Smallest String Starting From Leaf', (): void => {

    it('Full Tree. Alphabetic order', (): void => {
        expect(smallestFromLeaf(arrayToTree([0, 1, 2, 3, 4, 3, 4])))
            .toBe("dba")
    })

    it('Full Tree. Non alphabetic order', (): void => {
        expect(smallestFromLeaf(arrayToTree([25, 1, 3, 1, 3, 0, 2])))
            .toBe("adz")
    })

    it('Middle tree. Non alphabetic order', (): void => {
        expect(smallestFromLeaf(arrayToTree([2, 2, 1, null, 1, 0, null, 0])))
            .toBe("abc")
    })

    it('Righty tree', (): void => {
        expect(smallestFromLeaf(arrayToTree([0, null, 1])))
            .toBe("ba")
    })
})
