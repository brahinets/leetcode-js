import { asteroidsDestroyed } from '../script'

describe('2126. Destroying Asteroids', (): void => {
    it('can destroy all asteroids when mass grows enough', (): void => {
        expect(asteroidsDestroyed(10, [3, 9, 19, 5, 21])).
            toBe(true)
    })

    it('cannot destroy asteroid larger than accumulated mass', (): void => {
        expect(asteroidsDestroyed(5, [4, 9, 23, 4])).
            toBe(false)
    })

    it('single asteroid equal to mass', (): void => {
        expect(asteroidsDestroyed(10, [10])).
            toBe(true)
    })

    it('single asteroid greater than mass', (): void => {
        expect(asteroidsDestroyed(10, [11])).
            toBe(false)
    })

    it('all asteroids smaller than initial mass', (): void => {
        expect(asteroidsDestroyed(100, [1, 2, 3])).
            toBe(true)
    })
})
