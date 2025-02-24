import {mostProfitablePath} from '../script'

describe('2467. Most Profitable Path in a Tree', (): void => {
    it('One', (): void => {
        expect(mostProfitablePath([[0, 1], [1, 2], [1, 3], [3, 4]], 3, [-2, 4, 2, -4, 6]))
            .toEqual(6)
    })

    it('Two', (): void => {
        expect(mostProfitablePath([[0, 1]], 1, [-7280, 2350]))
            .toEqual(-7280)
    })
})
