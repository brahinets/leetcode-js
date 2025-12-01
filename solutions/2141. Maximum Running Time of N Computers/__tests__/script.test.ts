import {maxRunTime} from '../script'

describe('2141. Maximum Running Time of N Computers', (): void => {
    it('Partial discharge', (): void => {
        expect(maxRunTime(2, [3, 3, 3]))
            .toBe(4)
    })

    it('Full discharge', (): void => {
        expect(maxRunTime(2, [1, 1, 1, 1]))
            .toBe(2)
    })
})
