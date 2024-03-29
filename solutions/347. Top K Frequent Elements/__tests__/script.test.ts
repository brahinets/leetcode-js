import {topKFrequent} from '../script'

describe('347. Top K Frequent Elements', (): void => {

    it('All', (): void => {
        expect(topKFrequent([1], 1))
            .toStrictEqual([1])
    })

    it('Top sorted by counts', (): void => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2))
            .toStrictEqual([1, 2])
    })

    it('Top sorted by counts and similar count use latter', (): void => {
        expect(topKFrequent([1, 1, 1, 2, 2, 2, 3, 3, 3], 2))
            .toStrictEqual([3, 2])
    })
})
