import {getNoZeroIntegers} from '../script'

describe('1317. Convert Integer to the Sum of Two No-Zero Integers', (): void => {
    it('Same', (): void => {
        expect(getNoZeroIntegers(2))
            .toEqual([1, 1])
    })


    it('Different', (): void => {
        expect(getNoZeroIntegers(11))
            .toEqual([2, 9])
    })
})
