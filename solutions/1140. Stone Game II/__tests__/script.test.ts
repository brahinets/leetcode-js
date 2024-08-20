import {stoneGameII} from '../script'

describe('1140. Stone Game II', (): void => {

    it('One', (): void => {
        expect(stoneGameII([2, 7, 9, 4, 4]))
            .toEqual(10)
    })

    it('Two', (): void => {
        expect(stoneGameII([1, 2, 3, 4, 5, 100]))
            .toEqual(104)
    })
})
