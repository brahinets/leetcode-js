import {countNicePairs} from '../script'

describe('1814. Count Nice Pairs in an Array', (): void => {

    it('Few nice pairs', (): void => {
        expect(countNicePairs([42, 11, 1, 97]))
            .toBe(2)
    })

    it('Many nice pairs', (): void => {
        expect(countNicePairs([13, 10, 35, 24, 76]))
            .toBe(4)
    })
})

