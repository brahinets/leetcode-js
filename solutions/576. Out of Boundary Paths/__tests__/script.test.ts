import {findPaths} from '../script'

describe('576. Out of Boundary Paths', (): void => {

    it('Few ways. Square board', (): void => {
        expect(findPaths(2, 2, 2, 0, 0))
            .toBe(6)
    })

    it('Few ways. Linear board', (): void => {
        expect(findPaths(1, 3, 3, 0, 1))
            .toBe(12)
    })
})
