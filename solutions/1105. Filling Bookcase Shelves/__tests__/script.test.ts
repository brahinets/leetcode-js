import {minHeightShelves} from '../script'

describe('1105. Filling Bookcase Shelves', (): void => {
    it('One', (): void => {
        expect(minHeightShelves([[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]], 4))
            .toBe(6)
    })

    it('Two', (): void => {
        expect(minHeightShelves([[1, 3], [2, 4], [3, 2]], 6))
            .toBe(4)
    })
})
