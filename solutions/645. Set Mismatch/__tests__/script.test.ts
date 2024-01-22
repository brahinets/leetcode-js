import {findErrorNums} from '../script'

describe('645. Set Mismatch', (): void => {

    it('Next entry is missing', (): void => {
        expect(findErrorNums([1, 1, 3]))
            .toEqual([1, 2])
    })

    it('Not next entry is missing', (): void => {
        expect(findErrorNums([1, 2, 2, 3, 5]))
            .toEqual([2, 4])
    })
})
