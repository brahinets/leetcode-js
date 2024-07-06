import {passThePillow} from '../script'

describe('2582. Pass the Pillow', (): void => {
    it('Pass forward only', (): void => {
        expect(passThePillow(3, 2))
            .toBe(3)
    })

    it('Pass forward and back', (): void => {
        expect(passThePillow(4, 5))
            .toBe(2)
    })

    it('Pass forward and back #2', (): void => {
        expect(passThePillow(8, 9))
            .toBe(6)
    })

    it('Pass forward multiple times', (): void => {
        expect(passThePillow(18, 38))
            .toBe(5)
    })

    it('Pass forward multiple times #2', (): void => {
        expect(passThePillow(4, 10))
            .toBe(3)
    })
})
