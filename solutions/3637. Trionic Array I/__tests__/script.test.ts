import {isTrionic} from '../script'

describe('3637. Trionic Array I', (): void => {
    it('Valid trionic array [1,3,5,4,2,6]', (): void => {
        expect(isTrionic([1, 3, 5, 4, 2, 6]))
            .toBe(true)
    })

    it('First segment is not increasing [2,1,3]', (): void => {
        expect(isTrionic([2, 1, 3]))
            .toBe(false)
    })

    it('Strictly increasing array', (): void => {
        expect(isTrionic([1, 2, 3, 4, 5]))
            .toBe(false)
    })

    it('Strictly decreasing array', (): void => {
        expect(isTrionic([5, 4, 3, 2, 1]))
            .toBe(false)
    })

    it('Third segment is missing', (): void => {
        expect(isTrionic([1, 3, 5, 4, 2]))
            .toBe(false)
    })

    it('First segment is missing', (): void => {
        expect(isTrionic([5, 3, 1, 2, 4]))
            .toBe(false)
    })

    it('Minimal trionic array [1,2,1,2]', (): void => {
        expect(isTrionic([1, 2, 1, 2]))
            .toBe(true)
    })

    it('Equal adjacent elements break strict ordering', (): void => {
        expect(isTrionic([1, 2, 2, 1, 2]))
            .toBe(false)
    })
})
