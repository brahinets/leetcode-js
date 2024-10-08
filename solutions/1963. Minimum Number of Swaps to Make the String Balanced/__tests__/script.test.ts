import {minSwaps} from '../script'

describe('1963. Minimum Number of Swaps to Make the String Balanced', (): void => {
    it('The string is already balanced', (): void => {
        expect(minSwaps("[]"))
            .toBe(0)
    })

    it('The string need one swap to be balanced', (): void => {
        expect(minSwaps("][]["))
            .toBe(1)
    })

    it('The string need multiple swaps to be balanced.', (): void => {
        expect(minSwaps("]]][[["))
            .toBe(2)
    })
})
