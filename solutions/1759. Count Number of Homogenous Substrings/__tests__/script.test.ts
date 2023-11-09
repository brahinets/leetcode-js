import {countHomogenous} from '../script'

describe('1759. Count Number of Homogenous Substrings', (): void => {
    it('Several', (): void => {
        expect(countHomogenous("xy"))
            .toBe(2)
    })

    it('Many', (): void => {
        expect(countHomogenous("abbcccaa"))
            .toBe(13)
    })

    it('Very Many', (): void => {
        expect(countHomogenous("zzzzz"))
            .toBe(15)
    })
})
