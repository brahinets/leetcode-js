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

    it('Load test', (): void => {
        expect(findKthNumber(804289384, 42641503))
            .toBe(138377349)
    })
})
