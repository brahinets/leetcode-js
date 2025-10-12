import {magicalSum} from '../script'

describe('3539. Find Sum of Array Product of Magical Sequences', (): void => {
    it('One', (): void => {
        expect(magicalSum(5, 5, [1, 10, 100, 10000, 1000000]))
            .toBe(991600007)
    })

    it('Two', (): void => {
        expect(magicalSum(2, 2, [5, 4, 3, 2, 1]))
            .toBe(170)
    })

    it('Three', (): void => {
        expect(magicalSum(1, 1, [28]))
            .toBe(28)
    })

    it('Four', (): void => {
        expect(magicalSum(2, 1, [63]))
            .toBe(3969)
    })
})
