import {lexicalOrder} from '../script'

describe('386. Lexicographical Numbers', (): void => {
    it('One radix', (): void => {
        expect(lexicalOrder(2))
            .toEqual([1, 2])
    })

    it('Two radix', (): void => {
        expect(lexicalOrder(13))
            .toEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9])
    })
})
