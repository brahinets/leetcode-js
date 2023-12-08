import {asteroidCollision} from '../script'

describe('735. Asteroid Collision', (): void => {
    it('Explode nothing', (): void => {
        expect(asteroidCollision([5, 10]))
            .toEqual([5, 10])
    })

    it('Explode one', (): void => {
        expect(asteroidCollision([5, 10, -5]))
            .toEqual([5, 10])
    })

    it('Explode several', (): void => {
        expect(asteroidCollision([10, 2, -5]))
            .toEqual([10])
    })

    it('Explode several as well', (): void => {
        expect(asteroidCollision([-2, 1, 1, -1]))
            .toEqual([-2, 1])
    })


    it('Explode several as well again', (): void => {
        expect(asteroidCollision([-2, 1, 1, -2]))
            .toEqual([-2, -2])
    })

    it('Explode several as well again more', (): void => {
        expect(asteroidCollision([1, -1, 1, -2]))
            .toEqual([-2])
    })

    it('Explode all', (): void => {
        expect(asteroidCollision([8, -8]))
            .toEqual([])
    })
})
