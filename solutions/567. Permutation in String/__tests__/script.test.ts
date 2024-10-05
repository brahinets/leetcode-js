import {checkInclusion} from '../script'

describe('567. Permutation in String', (): void => {

    it('Full string is permutation', (): void => {
        expect(checkInclusion("adcd", "dcda"))
            .toBe(true)
    })

    it('Contains one permutation', (): void => {
        expect(checkInclusion("ab", "eidbaooo"))
            .toBe(true)
    })

    it('Not permutation', (): void => {
        expect(checkInclusion("ab", "eidboaoo"))
            .toBe(false)
    })
})
