import {maxDiff} from '../script'

describe('1432. Max Difference You Can Get From Changing an Integer', (): void => {
    it('One', (): void => {
        expect(maxDiff(555))
            .toBe(888)
    })

    it('Two', (): void => {
        expect(maxDiff(9))
            .toBe(8)
    })
})
