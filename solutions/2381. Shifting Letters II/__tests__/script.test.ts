import {shiftingLetters} from '../script'

describe('2381. Shifting Letters II', (): void => {
    it('One', (): void => {
        expect(shiftingLetters("abc", [[0, 1, 0], [1, 2, 1], [0, 2, 1]]))
            .toBe("ace")
    })

    it('Two', (): void => {
        expect(shiftingLetters("dztz", [[0, 0, 0], [1, 1, 1]]))
            .toBe("catz")
    })
})
