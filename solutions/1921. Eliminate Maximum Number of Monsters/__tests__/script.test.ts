import {eliminateMaximum} from '../script'

describe('1921. Eliminate Maximum Number of Monsters', (): void => {

    it('Terminate all', (): void => {
        expect(eliminateMaximum([1, 3, 4], [1, 1, 1]))
            .toBe(3)
    })

    it('Terminate all again', (): void => {
        expect(eliminateMaximum([4, 2, 3], [2, 1, 1]))
            .toBe(3)
    })

    it('Terminate one', (): void => {
        expect(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]))
            .toBe(1)
    })

    it('Terminate first', (): void => {
        expect(eliminateMaximum([3, 2, 4], [5, 3, 2]))
            .toBe(1)
    })

    it('Terminate many', (): void => {
        expect(eliminateMaximum([46, 33, 44, 42, 46, 36, 7, 36, 31, 47, 38, 42, 43, 48, 48, 25, 28, 44, 49, 47, 29, 32, 30, 6, 42, 9, 39, 48, 22, 26, 50, 34, 40, 22, 10, 45, 7, 43, 24, 18, 40, 44, 17, 39, 36], [1, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 3, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 8, 1, 1, 1, 3, 6, 1, 3, 1, 1]))
            .toBe(7)
    })
})
