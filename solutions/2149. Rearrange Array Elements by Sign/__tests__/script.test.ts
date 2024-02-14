import {rearrangeArray} from '../script'

describe('2149. Rearrange Array Elements by Sign', (): void => {

    it('One', (): void => {
        expect(rearrangeArray([3, 1, -2, -5, 2, -4]))
            .toEqual([3, -2, 1, -5, 2, -4])
    })

    it('Two', (): void => {
        expect(rearrangeArray([-1, 1]))
            .toEqual([1, -1])
    })
})
