import {countTriples} from '../script'

describe('1925. Count Square Sum Triples', (): void => {
    it('Two', (): void => {
        expect(countTriples(5))
            .toBe(2)
    })

    it('Many', (): void => {
        expect(countTriples(10))
            .toBe(4)
    })
})
