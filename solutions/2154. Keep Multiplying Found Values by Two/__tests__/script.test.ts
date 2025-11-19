import {findFinalValue} from '../script'

describe('2154. Keep Multiplying Found Values by Two', (): void => {
    it('Some multiply', (): void => {
        expect(findFinalValue([5, 3, 6, 1, 12], 3))
            .toBe(24)
    })

    it('No multiply', (): void => {
        expect(findFinalValue([2, 7, 9], 4))
            .toBe(4)
    })
})
