import {candy} from '../script'

describe('135. Candy', (): void => {
    it('One', (): void => {
        expect(candy([1, 0, 2]))
            .toBe(5)
    })

    it('Two', (): void => {
        expect(candy([1, 2, 2]))
            .toBe(4)
    })
})
