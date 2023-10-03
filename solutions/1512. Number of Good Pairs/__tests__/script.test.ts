import {numIdenticalPairs} from '../script'

describe('1512. Number of Good Pairs', (): void => {

    it('No pairs in the array are good', (): void => {
        expect(numIdenticalPairs([1, 2, 3]))
            .toBe(0)
    })

    it('Each pair in the array are good', (): void => {
        expect(numIdenticalPairs([1, 1, 1, 1]))
            .toBe(6)
    })

    it('Several pairs in the array are good', (): void => {
        expect(numIdenticalPairs([1, 2, 3, 1, 1, 3]))
            .toBe(4)
    })
})

