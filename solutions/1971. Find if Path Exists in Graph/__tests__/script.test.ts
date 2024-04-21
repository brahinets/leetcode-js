import {validPath} from '../script'

describe('1971. Find if Path Exists in Graph', (): void => {

    it('Path exist', (): void => {
        expect(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))
            .toBe(true)
    })

    it('Path does not exist', (): void => {
        expect(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5))
            .toBe(false)
    })
})
