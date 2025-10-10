import {maximumEnergy} from '../script'

describe('3147. Taking Maximum Energy From the Mystic Dungeon', (): void => {
    it('Positive energy', (): void => {
        expect(maximumEnergy([5, 2, -10, -5, 1], 3))
            .toBe(3)
    })

    it('Negative energy', (): void => {
        expect(maximumEnergy([-2, -3, -1], 2))
            .toBe(-1)
    })
})
