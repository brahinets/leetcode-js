import {merge} from '../script'

describe('56. Merge Intervals', (): void => {
    it('Merge some', (): void => {
        expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
            .toEqual([[1, 6], [8, 10], [15, 18]])
    })

    it('Merge all', (): void => {
        expect(merge([[1, 4], [4, 5]]))
            .toEqual([[1, 5]])
    })

    it('Merge nothing', (): void => {
        expect(merge([[1, 4], [5, 6]]))
            .toEqual([[1, 4], [5, 6]])
    })
})
