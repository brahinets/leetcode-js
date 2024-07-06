import {passThePillow} from '../script'

describe('2582. Pass the Pillow', (): void => {
    it('Pass back one time', (): void => {
        expect(passThePillow(4, 5))
            .toBe(2)
    })

    it('Pass forward only', (): void => {
        expect(passThePillow(3, 2))
            .toBe(3)
    })

    it('Pass forward only', (): void => {
        expect(passThePillow(8, 9))
            .toBe(6)
    })

    it('Pass back and forward', (): void => {
        expect(passThePillow(4, 10))
            .toBe(3)
    })
})
