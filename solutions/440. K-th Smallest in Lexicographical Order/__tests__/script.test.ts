import {findKthNumber} from '../script'

describe('440. K-th Smallest in Lexicographical Order', (): void => {
    it('One radix', (): void => {
        expect(findKthNumber(1, 1))
            .toBe(1)
    })

    it('Two radix', (): void => {
        expect(findKthNumber(13, 2))
            .toBe(10)
    })
})
