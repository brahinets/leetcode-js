import {putMarbles} from '../script'

describe('2551. Put Marbles in Bags', (): void => {

    it('Not enough data', (): void => {
        expect((): number => putMarbles([1, 3, 5, 1], 5))
            .toThrow("Not enough data")
    })

    it('Min and Max equal', (): void => {
        expect(putMarbles([1, 3], 2))
            .toBe(0)
    })

    it('Min and Max are different', (): void => {
        expect(putMarbles([1, 3, 5, 1], 2))
            .toBe(4)
    })

    it('Min and Max are also different', (): void => {
        expect(putMarbles([1, 4, 2, 5, 2], 3))
            .toBe(3)
    })

    it('Load test', (): void => {
        expect(putMarbles([54, 6, 34, 66, 63, 52, 39, 62, 46, 75, 28, 65, 18, 37, 18, 13, 33, 69, 19, 40, 13, 10, 43, 61, 72], 4))
            .toBe(289)
    })
})
