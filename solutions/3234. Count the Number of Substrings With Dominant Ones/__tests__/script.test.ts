import {numberOfSubstrings} from '../script'

describe('3234. Count the Number of Substrings With Dominant Ones', (): void => {
    it('Few', (): void => {
        expect(numberOfSubstrings("00011"))
            .toBe(5)
    })

    it('Many', (): void => {
        expect(numberOfSubstrings("101101"))
            .toBe(16)
    })
})
