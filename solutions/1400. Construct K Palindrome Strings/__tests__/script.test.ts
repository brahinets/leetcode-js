import {canConstruct} from '../script'

describe('1400. Construct K Palindrome Strings', (): void => {
    it('Possible multiple ways', (): void => {
        expect(canConstruct("annabelle", 2))
            .toEqual(true)
    })

    it('Possible the only way', (): void => {
        expect(canConstruct("true", 4))
            .toEqual(true)
    })

    it('Impossible', (): void => {
        expect(canConstruct("leetcode", 3))
            .toEqual(false)
    })
})
