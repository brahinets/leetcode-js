import {judgePoint24} from '../script'

describe('679. 24 Game', (): void => {
    it('Yes', (): void => {
        expect(judgePoint24([4, 1, 8, 7]))
            .toBe(true)
    })

    it('No', (): void => {
        expect(judgePoint24([1, 2, 1, 2]))
            .toBe(false)
    })
})
