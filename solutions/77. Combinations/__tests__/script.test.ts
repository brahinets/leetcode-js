import {combine} from '../script'

describe('77. Combinations', (): void => {
    it('Single combination', (): void => {
        expect(combine(1, 1))
            .toStrictEqual([[1]])
    })

    it('Many combinations', (): void => {
        expect(combine(4, 2))
            .toStrictEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
    })
})
