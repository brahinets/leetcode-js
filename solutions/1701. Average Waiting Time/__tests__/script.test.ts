import {averageWaitingTime} from '../script'

describe('1701. Average Waiting Time', (): void => {

    it('Integer waiting time', (): void => {
        expect(averageWaitingTime([[1, 2], [2, 5], [4, 3]]))
            .toBe(5)
    })

    it('Floating waiting time', (): void => {
        expect(averageWaitingTime([[5, 2], [5, 4], [10, 3], [20, 1]]))
            .toBeCloseTo(3.25, 3)
    })
})
