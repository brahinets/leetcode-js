import {smallestNumber} from '../script'

describe('3370. Smallest Number With All Set Bits', (): void => {
    it('Slightly greater', (): void => {
        expect(smallestNumber(6))
            .toBe(7)
    })

    it('Much greater', (): void => {
        expect(smallestNumber(10))
            .toBe(15)
    })

    it('The same', (): void => {
        expect(smallestNumber(3))
            .toBe(3)
    })
})
