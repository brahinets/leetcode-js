import {minimizeArrayValue} from '../script'

describe('2439. Minimize Maximum of Array', (): void => {
    it('Can move', (): void => {
        expect(minimizeArrayValue([3, 7, 1, 6]))
            .toBe(5)
    })
    it('Cannot move', (): void => {
        expect(minimizeArrayValue([10, 1]))
            .toBe(10)
    })
})
