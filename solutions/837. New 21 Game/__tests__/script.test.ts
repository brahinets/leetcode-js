import {new21Game} from '../script'

describe('837. New 21 Game', (): void => {
    it('Integer', (): void => {
        expect(new21Game(10, 1, 10))
            .toBeCloseTo(1.00000, 5)
    })

    it('Easy float', (): void => {
        expect(new21Game(6, 1, 10))
            .toBeCloseTo(0.60000, 5)
    })

    it('Complex float', (): void => {
        expect(new21Game(21, 17, 10))
            .toBeCloseTo(0.73278, 5)
    })
})
