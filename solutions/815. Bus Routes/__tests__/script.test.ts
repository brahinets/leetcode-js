import {numBusesToDestination} from '../script'

describe('815. Bus Routes', (): void => {
    it('Possible', (): void => {
        expect(numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6))
            .toBe(2)
    })

    it('Impossible', (): void => {
        expect(numBusesToDestination([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12))
            .toBe(-1)
    })
})
