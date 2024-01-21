import {highestPeak} from '../script'

describe('1765. Map of Highest Peak', (): void => {
    it('One', (): void => {
        expect(highestPeak([[0, 1], [0, 0]]))
            .toEqual([[1, 0], [2, 1]])
    })

    it('Two', (): void => {
        expect(highestPeak([[0, 0, 1], [1, 0, 0], [0, 0, 0]]))
            .toEqual([[1, 1, 0], [0, 1, 1], [1, 2, 2]])
    })
})
