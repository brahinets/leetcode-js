import { numberOfStableArrays } from '../script'

describe('3129. Find All Possible Stable Binary Arrays I', (): void => {

    it('counts both orderings when limit allows any placement', (): void => {
        expect(numberOfStableArrays(1, 1, 2)).toBe(2)
    })

    it('rejects arrays with consecutive same-digit runs exceeding limit', (): void => {
        expect(numberOfStableArrays(1, 2, 1)).toBe(1)
    })

    it('counts all valid interleavings for balanced arrays with partial limit', (): void => {
        expect(numberOfStableArrays(3, 3, 2)).toBe(14)
    })

    it('imposes no constraint when limit exceeds total array length', (): void => {
        expect(numberOfStableArrays(2, 2, 4)).toBe(6)
    })

    it('allows only strictly alternating arrays when limit is 1', (): void => {
        expect(numberOfStableArrays(2, 2, 1)).toBe(2)
    })
})
