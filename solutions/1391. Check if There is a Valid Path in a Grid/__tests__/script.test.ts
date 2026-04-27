import { hasValidPath } from '../script'

describe('1391. Check if There is a Valid Path in a Grid', (): void => {

    it('path exists with turns', (): void => {
        expect(hasValidPath([[2, 4, 3], [6, 5, 2]]))
            .toBe(true)
    })

    it('disconnected streets block path', (): void => {
        expect(hasValidPath([[1, 2, 1], [1, 2, 1]]))
            .toBe(false)
    })

    it('single row with incompatible end street', (): void => {
        expect(hasValidPath([[1, 1, 2]]))
            .toBe(false)
    })

    it('single cell', (): void => {
        expect(hasValidPath([[1]]))
            .toBe(true)
    })
})
