import {nthUglyNumber} from '../script'

describe('264. Ugly Number II', (): void => {
    it('N-th has no prime factors', (): void => {
        expect(nthUglyNumber(10))
            .toBe(12)
    })

    it('1 has no prime factors', (): void => {
        expect(nthUglyNumber(1))
            .toBe(1)
    })
})
