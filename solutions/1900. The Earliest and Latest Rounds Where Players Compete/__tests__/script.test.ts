import {earliestAndLatest} from '../script'

describe('1900. The Earliest and Latest Rounds Where Players Compete', (): void => {
    it('Multiple possible way to compete', (): void => {
        expect(earliestAndLatest(11, 2, 4))
            .toEqual([3, 4])
    })

    it('One possible way to compete', (): void => {
        expect(earliestAndLatest(5, 1, 5))
            .toEqual([1, 1])
    })
})
