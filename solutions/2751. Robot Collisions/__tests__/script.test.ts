import {survivedRobotsHealths} from "../script"

describe('2751. Robot Collisions', (): void => {

    it('No collisions', (): void => {
        expect(survivedRobotsHealths([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], "RRRRR"))
            .toEqual([2, 17, 9, 15, 10])
    })

    it('Multiple collide', (): void => {
        expect(survivedRobotsHealths([3, 5, 2, 6], [10, 10, 15, 12], "RLRL"))
            .toEqual([14])
    })

    it('All collide', (): void => {
        expect(survivedRobotsHealths([1, 2, 5, 6], [10, 10, 11, 11], "RLRL"))
            .toEqual([])
    })
})
