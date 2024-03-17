import {insert} from '../script'

describe('57. Insert Interval', (): void => {

    it('Merge nothing', (): void => {
        expect(insert([[1, 3], [6, 9]], [4, 5]))
            .toEqual([[1, 3], [4, 5], [6, 9]])
    })

    it('Merge some', (): void => {
        expect(insert([[1, 3], [6, 9]], [2, 5]))
            .toEqual([[1, 5], [6, 9]])
    })

    it('Merge multiple', (): void => {
        expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
            .toEqual([[1, 2], [3, 10], [12, 16]])
    })
})
