import {fib} from '../script'

describe('509. Fibonacci Number', (): void => {
    it('Zeros', (): void => {
        expect(fib(0)).toBe(0)
    })

    it('First', (): void => {
        expect(fib(1)).toBe(1)
    })

    it('Tenth', (): void => {
        expect(fib(10)).toBe(55)
    })

    it('Load test', (): void => {
        expect(fib(50)).toBe(12586269025)
    })
})
