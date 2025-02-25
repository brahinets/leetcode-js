import {maxUniqueSplit} from '../script'

describe('1593. Split a String Into the Max Number of Unique Substrings', (): void => {
    it('Multiple strings', (): void => {
        expect(maxUniqueSplit("ababccc"))
            .toBe(5)
    })

    it('Two strings', (): void => {
        expect(maxUniqueSplit("aba"))
            .toBe(2)
    })

    it('Impossible to split', (): void => {
        expect(maxUniqueSplit("aa"))
            .toBe(1)
    })
})
