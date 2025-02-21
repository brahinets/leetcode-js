import {FindElements} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('1261. Find Elements in a Contaminated Binary Tree', (): void => {
    it('One', (): void => {
        const findElements: FindElements = new FindElements(arrayToTree([-1, null, -1]));

        expect(findElements.find(1)).toBe(false)
        expect(findElements.find(2)).toBe(true)
    })

    it('Two', (): void => {
        const findElements: FindElements = new FindElements(arrayToTree([-1, -1, -1, -1, -1]))

        expect(findElements.find(1)).toBe(true)
        expect(findElements.find(3)).toBe(true)
        expect(findElements.find(5)).toBe(false)
    })

    it('Three', (): void => {
        const findElements: FindElements = new FindElements(arrayToTree([-1, null, -1, -1, null, -1]));

        expect(findElements.find(2)).toBe(true)
        expect(findElements.find(3)).toBe(false)
        expect(findElements.find(4)).toBe(false)
        expect(findElements.find(5)).toBe(true)
    })
})
