import {countHillValley} from '../script'

describe('2210. Count Hills and Valleys in an Array', (): void => {
    it('Multiple', (): void => {
        expect(countHillValley([2, 4, 1, 1, 6, 5]))
            .toBe(3)
    })

    it('Zero', (): void => {
        expect(countHillValley([6, 6, 5, 5, 4, 1]))
            .toBe(0)
    })
})
