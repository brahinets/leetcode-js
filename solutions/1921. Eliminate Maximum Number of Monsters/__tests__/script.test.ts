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
})
