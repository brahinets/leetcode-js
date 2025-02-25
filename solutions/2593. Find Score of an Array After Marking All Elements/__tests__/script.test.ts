import {findScore} from '../script'

describe('2593. Find Score of an Array After Marking All Elements', (): void => {
    it('One', (): void => {
        expect(findScore([2, 1, 3, 4, 5, 2]))
            .toBe(7)
    })

    it('Two', (): void => {
        expect(findScore([2, 3, 5, 1, 3, 2]))
            .toBe(5)
    })
})
