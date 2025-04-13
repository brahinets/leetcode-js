import {countGoodNumbers} from '../script'

describe('1922. Count Good Numbers', (): void => {
    it('Simple good numbers', (): void => {
        expect(countGoodNumbers(1))
            .toBe(5)
    })

    it('Complex good numbers', (): void => {
        expect(countGoodNumbers(4))
            .toBe(400)
    })

    it('A lot of good numbers', (): void => {
        expect(countGoodNumbers(50))
            .toBe(564908303)
    })
})
