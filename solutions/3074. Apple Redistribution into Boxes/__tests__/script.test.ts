import {minimumBoxes} from '../script'

describe('3074. Apple Redistribution into Boxes', (): void => {
    it('We will need to use some boxes', (): void => {
        expect(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2]))
            .toBe(2)
    })

    it('We will need to use all the boxes', (): void => {
        expect(minimumBoxes([5, 5, 5], [2, 4, 2, 7]))
            .toBe(4)
    })
})
