import {checkValidCuts} from '../script'

describe('3394. Check if Grid can be Cut into Sections', (): void => {
    it('Can make horizontal cuts', (): void => {
        expect(checkValidCuts(5, [[1, 0, 5, 2], [0, 2, 2, 4], [3, 2, 5, 3], [0, 4, 4, 5]]))
            .toBe(true)
    })

    it('Can make vertical cuts at 2 and 3', (): void => {
        expect(checkValidCuts(4, [[0, 0, 1, 1], [2, 0, 3, 4], [0, 2, 2, 3], [3, 0, 4, 3]]))
            .toBe(true)
    })

    it('Cannot make two horizontal or two vertical cuts', (): void => {
        expect(checkValidCuts(4, [[0, 2, 2, 4], [1, 0, 3, 2], [2, 2, 3, 4], [3, 0, 4, 2], [3, 2, 4, 4]]))
            .toBe(false)
    })
})
