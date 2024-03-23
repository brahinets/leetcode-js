import {findJudge} from '../script'

describe('997. Find the Town Judge', (): void => {

    it('One', (): void => {
        expect(findJudge(2, [[1, 2]]))
            .toBe(2)
    })

    it('Two', (): void => {
        expect(findJudge(3, [[1, 3], [2, 3]]))
            .toBe(3)
    })

    it('No judge', (): void => {
        expect(findJudge(3, [[1, 3], [2, 3], [3, 1]]))
            .toBe(-1)
    })
})
