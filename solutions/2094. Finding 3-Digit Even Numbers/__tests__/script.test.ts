import {findEvenNumbers} from '../script'

describe('2094. Finding 3-Digit Even Numbers', (): void => {
    it('Skip leading zeros', (): void => {
        expect(findEvenNumbers([2, 1, 3, 0]))
            .toEqual([102, 120, 130, 132, 210, 230, 302, 310, 312, 320])
    })

    it('The same digit can be used as many times as it appears in digits', (): void => {
        expect(findEvenNumbers([2, 2, 8, 8, 2]))
            .toEqual([222, 228, 282, 288, 822, 828, 882])
    })

    it('Not even', (): void => {
        expect(findEvenNumbers([3, 7, 5]))
            .toEqual([])
    })
})
