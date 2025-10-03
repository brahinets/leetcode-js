import {search} from '../script'

describe('81. Search in Rotated Sorted Array II', (): void => {
    it('Exist', (): void => {
        expect(search([2, 5, 6, 0, 0, 1, 2], 0))
            .toBe(true)
    })

    it('Not exist', (): void => {
        expect(search([2, 5, 6, 0, 0, 1, 2], 3))
            .toBe(false)
    })
})
