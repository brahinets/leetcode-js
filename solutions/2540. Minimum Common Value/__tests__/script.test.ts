import {getCommon} from '../script'

describe('2540. Minimum Common Value', (): void => {

    it('Single common', (): void => {
        expect(getCommon([1, 2, 3], [2, 4]))
            .toBe(2)
    })

    it('Minimal common when multiple common', (): void => {
        expect(getCommon([1, 2, 3, 6], [2, 3, 4, 5]))
            .toBe(2)
    })

    it('No common', (): void => {
        expect(() => getCommon([1, 2], [3, 4]))
            .toThrow("Illegal state. No common")
    })
})
