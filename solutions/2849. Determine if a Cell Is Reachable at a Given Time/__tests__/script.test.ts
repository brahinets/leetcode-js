import {isReachableAtTime} from '../script'

describe('2849. Determine if a Cell Is Reachable at a Given Time', (): void => {
    it('Not enough time', (): void => {
        expect(isReachableAtTime(3, 1, 7, 3, 3))
            .toBe(false)
    })

    it('Has exact time', (): void => {
        expect(isReachableAtTime(2, 4, 7, 7, 6))
            .toBe(true)
    })

    it('Has extra time', (): void => {
        expect(isReachableAtTime(1, 2, 1, 2, 1))
            .toBe(false)
    })
})
