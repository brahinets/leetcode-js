import {reverseOddLevels} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('2415. Reverse Odd Levels of Binary Tree', (): void => {
    it('Only one odd level', (): void => {
        expect(reverseOddLevels(arrayToTree([2, 3, 5, 8, 13, 21, 34])))
            .toEqual(arrayToTree([2, 5, 3, 8, 13, 21, 34]))
    })

    it('Two', (): void => {
        expect(reverseOddLevels(arrayToTree([7, 13, 11])))
            .toEqual(arrayToTree([7, 11, 13]))
    })

    it('Three', (): void => {
        expect(reverseOddLevels(arrayToTree([0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2])))
            .toEqual(arrayToTree([0, 2, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1]))
    })
})
