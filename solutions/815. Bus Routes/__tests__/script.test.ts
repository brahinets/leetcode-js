import {numBusesToDestination} from '../script'

describe('815. Bus Routes', (): void => {
    it('Possible', (): void => {
        expect(numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6))
            .toBe(2)
    })

    it('The same bus. Ride one stop', (): void => {
        expect(numBusesToDestination([[2], [2, 8]], 8, 2))
            .toBe(1)
    })

    it('The same bus. Ride multiple stops', (): void => {
        expect(numBusesToDestination([[24], [3, 6, 11, 14, 22], [1, 23, 24], [0, 6, 14], [1, 3, 8, 11, 20]], 20, 8))
            .toBe(1)
    })

    it('Impossible', (): void => {
        expect(numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12))
            .toBe(-1)
    })
})
