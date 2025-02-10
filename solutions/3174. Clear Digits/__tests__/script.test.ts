import {clearDigits} from '../script'

describe('3174. Clear Digits', (): void => {
    it('There is no digits to remove', (): void => {
        expect(clearDigits("abc"))
            .toBe("abc")
    })

    it('Remove some in middle', (): void => {
        expect(clearDigits("cb4"))
            .toBe("c")
    })

    it('Remove just number', (): void => {
        expect(clearDigits("4c"))
            .toBe("c")
    })

    it('Remove all', (): void => {
        expect(clearDigits("cb34"))
            .toBe("")
    })
})
