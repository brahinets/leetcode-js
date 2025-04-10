import {numberOfPowerfulInt} from '../script'

describe('2999. Count the Number of Powerful Integers', (): void => {
    it('Many powerful', (): void => {
        expect(numberOfPowerfulInt(1, 6000, 4, "124"))
            .toBe(5)
    })

    it('Some powerful', (): void => {
        expect(numberOfPowerfulInt(15, 215, 6, "10"))
            .toBe(2)
    })

    it('Cannot be a suffix', (): void => {
        expect(numberOfPowerfulInt(1000, 2000, 4, "3000"))
            .toBe(0)
    })
})
