import {numSpecial} from '../script'

describe('1582. Special Positions in a Binary Matrix', (): void => {

    it('Zero', (): void => {
        expect(numSpecial([
            [1, 1, 1],
            [0, 0, 1],
            [1, 0, 0]]
        )).toBe(0)
    })

    it('One', (): void => {
        expect(numSpecial([
            [1, 0, 0],
            [0, 0, 1],
            [1, 0, 0]]
        )).toBe(1)
    })

    it('Several', (): void => {
        expect(numSpecial([
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]]
        )).toBe(3)
    })
})
