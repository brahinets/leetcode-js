import {minCost} from '../script'

describe('2561. Rearranging Fruits', (): void => {
    it('Possible #1', (): void => {
        expect(minCost([4, 2, 2, 2], [1, 4, 1, 2]))
            .toBe(1)
    })

    it('Possible #2', (): void => {
        expect(minCost([4, 4, 4, 4, 3], [5, 5, 5, 5, 3]))
            .toBe(8)
    })

    it('Impossible', (): void => {
        expect(minCost([2, 3, 4, 1], [3, 2, 5, 1]))
            .toBe(-1)
    })
})
