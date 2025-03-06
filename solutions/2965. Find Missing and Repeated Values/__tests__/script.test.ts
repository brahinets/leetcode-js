import {findMissingAndRepeatedValues} from '../script'

describe('2965. Find Missing and Repeated Values', (): void => {
    it('One', (): void => {
        expect(findMissingAndRepeatedValues([[1, 3], [2, 2]]))
            .toEqual([2, 4])
    })

    it('Two', (): void => {
        expect(findMissingAndRepeatedValues([[9, 1, 7], [8, 9, 2], [3, 4, 6]]))
            .toEqual([9, 5])
    })
})
