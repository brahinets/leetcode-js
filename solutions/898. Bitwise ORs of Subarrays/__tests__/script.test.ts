import {subarrayBitwiseORs} from '../script'

describe('898. Bitwise ORs of Subarrays', (): void => {
    it('One', (): void => {
        expect(subarrayBitwiseORs([0]))
            .toBe(1)
    })

    it('Two', (): void => {
        expect(subarrayBitwiseORs([1, 1, 2]))
            .toBe(3)
    })

    it('Three', (): void => {
        expect(subarrayBitwiseORs([1, 2, 4]))
            .toBe(6)
    })
})
