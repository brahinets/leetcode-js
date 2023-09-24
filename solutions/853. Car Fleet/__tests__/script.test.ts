import {carFleet} from '../script'

describe('853. Car Fleet', (): void => {

    it('No fleets', (): void => {
        expect(carFleet(10, [], []))
            .toBe(0)
    })

    it('One-car fleet', (): void => {
        expect(carFleet(10, [3], [3]))
            .toBe(1)
    })

    it('One long fleet', (): void => {
        expect(carFleet(100, [0, 2, 4], [4, 2, 1]))
            .toBe(1)
    })

    it('Multiple fleets', (): void => {
        expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]))
            .toBe(3)
    })

    it('Many fleets', (): void => {
        expect(carFleet(10, [8, 3, 7, 4, 6, 5], [4, 4, 4, 4, 4, 4]))
            .toBe(6)
    })

    it('Very many participants', (): void => {
        expect(carFleet(31, [5, 26, 18, 25, 29, 21, 22, 12, 19, 6], [7, 6, 6, 4, 3, 4, 9, 7, 6, 4]))
            .toBe(6)
    })
})
