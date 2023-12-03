import {canMakeArithmeticProgression} from '../script'

describe('1502. Can Make Arithmetic Progression From Sequence', (): void => {
    it('Yes, singleton set', (): void => {
        expect(canMakeArithmeticProgression([0]))
            .toBe(true)
    })

    it('Yes, small set', (): void => {
        expect(canMakeArithmeticProgression([0, 1]))
            .toBe(true)
    })

    it('Yes, immediately', (): void => {
        expect(canMakeArithmeticProgression([0, 1, 2, 3, 4]))
            .toBe(true)
    })

    it('Yes, after sorting', (): void => {
        expect(canMakeArithmeticProgression([3, 5, 1]))
            .toBe(true)
    })

    it('No', (): void => {
        expect(canMakeArithmeticProgression([1, 2, 4]))
            .toBe(false)
    })
})
