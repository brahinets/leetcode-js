import {possibleStringCount} from '../script'

describe('3333. Find the Original Typed String II', (): void => {
    it('Multiple', (): void => {
        expect(possibleStringCount("aabbccdd", 7))
            .toBe(5)
    })

    it('The only possible string', (): void => {
        expect(possibleStringCount("aabbccdd", 8))
            .toBe(1)
    })

    it('Many', (): void => {
        expect(possibleStringCount("aaabbb", 3))
            .toBe(8)
    })
})
