import {countCompleteComponents} from '../script'

describe('2685. Count the Number of Complete Components', (): void => {
    it('Multiple', (): void => {
        expect(countCompleteComponents(6, [[0, 1], [0, 2], [1, 2], [3, 4]]))
            .toBe(3)
    })

    it('The only', (): void => {
        expect(countCompleteComponents(6, [[0, 1], [0, 2], [1, 2], [3, 4], [3, 5]]))
            .toBe(1)
    })
})
