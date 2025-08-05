import {numOfUnplacedFruits} from '../script'

describe('3477. Fruits Into Baskets II', (): void => {
    it('One remains', (): void => {
        expect(numOfUnplacedFruits([4, 2, 5], [3, 5, 4]))
            .toEqual(1)
    })

    it('All packed', (): void => {
        expect(numOfUnplacedFruits([3, 6, 1], [6, 4, 7]))
            .toEqual(0)
    })
})
