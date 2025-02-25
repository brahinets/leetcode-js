import {findMaximizedCapital} from '../script'

describe('502. IPO', (): void => {

    it('One', (): void => {
        expect(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]))
            .toBe(4)
    })

    it('Two', (): void => {
        expect(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]))
            .toBe(6)
    })
})
