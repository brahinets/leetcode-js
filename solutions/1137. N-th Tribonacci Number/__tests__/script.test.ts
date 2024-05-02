import {tribonacci} from '../script'

describe('1137. N-th Tribonacci Number', (): void => {
    it('Zeros', (): void => {
        expect(tribonacci(0))
            .toBe(0)
    })

    it('First', (): void => {
        expect(tribonacci(1))
            .toBe(1)
    })

    it('Fourth', (): void => {
        expect(tribonacci(4))
            .toBe(4)
    })

    it('Big', (): void => {
        expect(tribonacci(25))
            .toBe(1389537)
    })

    it('Load test', (): void => {
        expect(tribonacci(34))
            .toBe(334745777)
    })
})
