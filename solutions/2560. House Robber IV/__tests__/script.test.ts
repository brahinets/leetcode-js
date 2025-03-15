import {minCapability} from '../script'

describe('2560. House Robber IV', (): void => {
    it('One', (): void => {
        expect(minCapability([2, 3, 5, 9], 1))
            .toBe(2)
    })

    it('Many', (): void => {
        expect(minCapability([2, 3, 5, 9], 2))
            .toBe(5)
    })

    it('Multiple', (): void => {
        expect(minCapability([2, 7, 9, 3, 1], 2))
            .toBe(2)
    })
})
