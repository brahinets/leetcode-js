import {singleNumber} from '../script'

describe('260. Single Number III', (): void => {

    it('Middle elements are unique', (): void => {
        expect(singleNumber([1, 2, 1, 3, 2, 5]))
            .toEqual([3, 5])
    })

    it('all unique numbers in same order as input', (): void => {
        expect(singleNumber([-1, 0]))
            .toEqual([-1, 0])
    })

    it('all unique numbers in different order than input', (): void => {
        expect(singleNumber([0, 1]))
            .toEqual([1, 0])
    })
})
