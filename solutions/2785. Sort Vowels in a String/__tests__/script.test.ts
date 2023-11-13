import {sortVowels} from '../script'

describe('2785. Sort Vowels in a String', (): void => {
    it('Empty string', (): void => {
        expect(sortVowels(""))
            .toBe("")
    })

    it('Some vowels', (): void => {
        expect(sortVowels("lEetcOde"))
            .toBe("lEOtcede")
    })


    it('No vowels for ', (): void => {
        expect(sortVowels("lYmpH"))
            .toBe("lYmpH")
    })
})
