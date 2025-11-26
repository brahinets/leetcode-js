import {numberOfPaths} from '../script'

describe('2435. Paths in Matrix Whose Sum Is Divisible by K', (): void => {
    it('The only path', (): void => {
        expect(numberOfPaths([[0, 0]], 5))
            .toBe(1)
    })

    it('Two paths', (): void => {
        expect(numberOfPaths([[5, 2, 4], [3, 0, 5], [0, 7, 2]], 3))
            .toBe(2)
    })

    it('Many paths', (): void => {
        expect(numberOfPaths([[7, 3, 4, 9], [2, 3, 6, 2], [2, 3, 7, 0]], 1))
            .toBe(10)
    })
})
