import {numDistinct} from '../script'

describe('115. Distinct Subsequences', (): void => {
    it('Few', (): void => {
        expect(numDistinct("rabbbit", "rabbit"))
            .toBe(3)
    })

    it('Many', (): void => {
        expect(numDistinct("babgbag", "bag"))
            .toBe(5)
    })
})
