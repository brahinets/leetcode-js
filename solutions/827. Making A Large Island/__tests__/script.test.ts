import {largestIsland} from '../script'

describe('827. Making A Large Island', (): void => {
    it('One', (): void => {
        expect(largestIsland([[1, 0], [0, 1]]))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(largestIsland([[1, 1], [1, 0]]))
            .toBe(4)
    })

    it('Three', (): void => {
        expect(largestIsland([[1, 1], [1, 1]]))
            .toBe(4)
    })
})
