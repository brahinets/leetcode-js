import {countVowelPermutation} from '../script'

describe('1220. Count Vowels Permutation', (): void => {

    it('Short result', (): void => {
        expect(countVowelPermutation(1))
            .toEqual(5)
    })

    it('Mid result', (): void => {
        expect(countVowelPermutation(2))
            .toEqual(10)
    })

    it('Big result', (): void => {
        expect(countVowelPermutation(5))
            .toEqual(68)
    })
})
