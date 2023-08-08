import {search} from '../script'

describe('33. Search in Rotated Sorted Array', (): void => {
    it('Contains', (): void => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0))
            .toBe(4)
    })

    it('Does not contain', (): void => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3))
            .toBe(-1)
    })

    it('Does not contain #2', (): void => {
        expect(search([1], 0))
            .toBe(-1)
    })
})
