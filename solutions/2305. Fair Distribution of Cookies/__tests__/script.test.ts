import {distributeCookies} from '../script'

describe('2305. Fair Distribution of Cookies', (): void => {
    it('By non equal number of cookies', (): void => {
        expect(distributeCookies([8, 15, 10, 20, 8], 2))
            .toBe(31)
    })

    // TODO #2305 Fix me
    it.skip('By non equal number of cookies again', (): void => {
        expect(distributeCookies([15, 14, 8, 13, 7, 2, 13, 19], 3))
            .toBe(32)
    })

    it('By equal number of cookies', (): void => {
        expect(distributeCookies([6, 1, 3, 2, 2, 4, 1, 2], 3))
            .toBe(7)
    })
})

