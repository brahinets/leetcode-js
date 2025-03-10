import {numOfArrays} from '../script'

describe('1420. Build Array Where You Can Find The Maximum Exactly K Comparisons\n', (): void => {
    it('Multiple possible arrays ', (): void => {
        expect(numOfArrays(2, 3, 1))
            .toBe(6)
    })

    it('There are no possible arrays ', (): void => {
        expect(numOfArrays(5, 2, 3))
            .toBe(0)
    })

    it('The only possible array', (): void => {
        expect(numOfArrays(9, 1, 1))
            .toBe(1)
    })
})
