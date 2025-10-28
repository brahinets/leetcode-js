import {countValidSelections} from '../script'

describe('3354. Make Array Elements Equal to Zero', (): void => {
    it('Have some', (): void => {
        expect(countValidSelections([1, 0, 2, 0, 3]))
            .toBe(2)
    })

    it('No', (): void => {
        expect(countValidSelections([2, 3, 4, 0, 4, 1, 0]))
            .toBe(0)
    })
})
