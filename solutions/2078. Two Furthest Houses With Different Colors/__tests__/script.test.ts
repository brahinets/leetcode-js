import { maxDistance } from '../script'

describe('2078. Two Furthest Houses With Different Colors', (): void => {

    it('all same color except one house in the middle', (): void => {
        expect(maxDistance([1, 1, 1, 6, 1, 1, 1]))
            .toBe(3)
    })

    it('first and last houses have different colors', (): void => {
        expect(maxDistance([1, 8, 3, 8, 3]))
            .toBe(4)
    })

    it('two houses with different colors', (): void => {
        expect(maxDistance([0, 1]))
            .toBe(1)
    })

    it('answer is the leftmost and rightmost houses', (): void => {
        expect(maxDistance([1, 2, 3]))
            .toBe(2)
    })

})
