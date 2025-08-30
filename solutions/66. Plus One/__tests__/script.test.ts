import {plusOne} from '../script'

describe('66. Plus One', (): void => {
    it('One', (): void => {
        expect(plusOne([1, 2, 3]))
            .toEqual([1, 2, 4])
    })

    it('Two', (): void => {
        expect(plusOne([4, 3, 2, 1]))
            .toEqual([4, 3, 2, 2])
    })

    it('Three', (): void => {
        expect(plusOne([9]))
            .toEqual([1, 0])
    })

    it('Four', (): void => {
        expect(plusOne([9, 9, 9]))
            .toEqual([1, 0, 0, 0])
    })

    it('Five', (): void => {
        expect(plusOne([1, 9, 9]))
            .toEqual([2, 0, 0])
    })

    it('Six', (): void => {
        expect(plusOne([0]))
            .toEqual([1])
    })

    it('Seven', (): void => {
        expect(plusOne([8, 9]))
            .toEqual([9, 0])
    })
})
