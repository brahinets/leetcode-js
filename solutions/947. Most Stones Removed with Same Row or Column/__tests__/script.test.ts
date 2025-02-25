import {removeStones} from '../script'

describe('947. Most Stones Removed with Same Row or Column', (): void => {

    it('One way to remove 5 stones is as follows:', (): void => {
        expect(removeStones([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]))
            .toBe(5)
    })

    it('One way to make 3 moves is as follows', (): void => {
        expect(removeStones([[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]]))
            .toEqual(3)
    })

    it('The only stone on the plane can be removed', (): void => {
        expect(removeStones([[0, 0]]))
            .toBe(0)
    })

    it('The only way', (): void => {
        expect(removeStones([[0, 0], [2, 2], [10000, 2]]))
            .toBe(1)
    })
})
