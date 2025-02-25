import {minimumSize} from '../script'

describe('1760. Minimum Limit of Balls in a Bag', (): void => {
    it('One', (): void => {
        expect(minimumSize([9], 2))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(minimumSize([2, 4, 8, 2], 4))
            .toBe(2)
    })
})
