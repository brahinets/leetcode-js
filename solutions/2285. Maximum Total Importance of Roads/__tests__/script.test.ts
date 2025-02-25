import {maximumImportance} from '../script'

describe('2285. Maximum Total Importance of Roads', (): void => {

    it('One big urban', (): void => {
        expect(maximumImportance(5, [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]]))
            .toBe(43)
    })

    it('Two small urbans', (): void => {
        expect(maximumImportance(5, [[0, 3], [2, 4], [1, 3]]))
            .toBe(20)
    })
})
