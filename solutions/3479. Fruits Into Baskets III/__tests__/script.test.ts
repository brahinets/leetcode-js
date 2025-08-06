import {numOfUnplacedFruits} from '../script'

describe('3479. Fruits Into Baskets III', (): void => {
    it('One', (): void => {
        expect(numOfUnplacedFruits([4, 2, 5], [3, 5, 4]))
            .toBe(1)
    })

    it('Two', (): void => {
        expect(numOfUnplacedFruits([3, 6, 1], [6, 4, 7]))
            .toBe(0)
    })
})
