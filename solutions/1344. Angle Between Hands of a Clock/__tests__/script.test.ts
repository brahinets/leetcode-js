import {angleClock} from '../script'

describe('1344. Angle Between Hands of a Clock', (): void => {
    it('Big angle', (): void => {
        expect(angleClock(12, 30))
            .toEqual(165)
    })

    it('Small angle', (): void => {
        expect(angleClock(3, 30))
            .toEqual(75)
    })

    it('Zero angle', (): void => {
        expect(angleClock(12, 0))
            .toEqual(0)
    })

    it('Fraction angle', (): void => {
        expect(angleClock(3, 15))
            .toEqual(7.5)
    })
})
