import { concatenatedBinary } from '../script'

describe('1680. Concatenation of Consecutive Binary Numbers', (): void => {
    it('n = 1', (): void => {
        expect(concatenatedBinary(1))
            .toBe(1)
    })

    it('n = 3', (): void => {
        expect(concatenatedBinary(3))
            .toBe(27)
    })

    it('n = 12', (): void => {
        expect(concatenatedBinary(12))
            .toBe(505379714)
    })
})
