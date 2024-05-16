import {evaluateTree} from "../script"
import {arrayToTree} from "../../../common/tree-utils"

describe('2331. Evaluate Boolean Binary Tree', (): void => {

    it('"Illegal operand"', (): void => {
        expect(() => evaluateTree(arrayToTree([5])))
            .toThrow("Illegal operand")
    })

    it('Root', (): void => {
        expect(evaluateTree(arrayToTree([0])))
            .toBe(false)
    })

    it('Has different operators', (): void => {
        expect(evaluateTree(arrayToTree([2, 1, 3, null, null, 0, 1])))
            .toBe(true)
    })
})
