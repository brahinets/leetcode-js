import {wonderfulSubstrings} from '../script'

describe('1915. Number of Wonderful Substrings', (): void => {

    it('Each char separately', (): void => {
        expect(wonderfulSubstrings("he"))
            .toBe(2)
    })

    it('One repeating', (): void => {
        expect(wonderfulSubstrings("aba"))
            .toBe(4)
    })

    it('Multiple repeating', (): void => {
        expect(wonderfulSubstrings("aabb"))
            .toBe(9)
    })
    it('Many repeatings', (): void => {
        expect(wonderfulSubstrings("ehaehcjjaafjdceac"))
            .toBe(29)
    })
})
