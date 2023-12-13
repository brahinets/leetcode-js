import {sum} from '../script'

describe('2235. Add Two Integers', (): void => {

    it('Positive sum', (): void => {
        expect(sum(12, 5))
            .toBe(17)
    })

    it('Negative sum', (): void => {
        expect(sum(-10, 4))
            .toBe(-6)
    })

    it('Zero sum', (): void => {
        expect(sum(-5, 5))
            .toBe(0)
    })
})
