import {maximumGain} from '../script'

describe('1717. Maximum Score From Removing Substrings', (): void => {
    it('One', (): void => {
        expect(maximumGain("cdbcbbaaabab", 4, 5))
            .toBe(19)
    })

    it('Two', (): void => {
        expect(maximumGain("aabbaaxybbaabb", 5, 4))
            .toBe(20)
    })
})
