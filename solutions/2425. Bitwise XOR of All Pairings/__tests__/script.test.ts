import {xorAllNums} from '../script'

describe('2425. Bitwise XOR of All Pairings', (): void => {
    it('Non zero', (): void => {
        expect(xorAllNums([2, 1, 3], [10, 2, 5, 0]))
            .toBe(13)
    })

    it('Zero', (): void => {
        expect(xorAllNums([1, 2], [3, 4]))
            .toBe(0)
    })
})
