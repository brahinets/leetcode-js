import {maximumGap} from '../script'

describe('164. Maximum Gap', (): void => {
    it('Gap between last two', (): void => {
        expect(maximumGap([3, 6, 9, 1]))
            .toBe(3)
    })

    it('Single element', (): void => {
        expect(maximumGap([10]))
            .toBe(0)
    })

    it('Two elements', (): void => {
        expect(maximumGap([1, 10]))
            .toBe(9)
    })

    it('All same elements', (): void => {
        expect(maximumGap([5, 5, 5]))
            .toBe(0)
    })

    it('Already sorted', (): void => {
        expect(maximumGap([1, 3, 6, 9]))
            .toBe(3)
    })
})
