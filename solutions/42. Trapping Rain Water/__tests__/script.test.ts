import {trap} from '../script'

describe('42. Trapping Rain Water', (): void => {

    it('Single trap', (): void => {
        expect(trap([4, 2, 0, 3, 2, 5]))
            .toBe(9)
    })

    it('Multiple traps', (): void => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
            .toBe(6)
    })
})
