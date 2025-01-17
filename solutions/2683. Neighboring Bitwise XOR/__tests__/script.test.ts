import {doesValidArrayExist} from '../script'

describe('2683. Neighboring Bitwise XOR', (): void => {
    it('Valid derived #1', (): void => {
        expect(doesValidArrayExist([1, 1, 0]))
            .toBe(true)
    })

    it('Valid derived #2', (): void => {
        expect(doesValidArrayExist([1, 1]))
            .toBe(true)
    })

    it('No valid derived', (): void => {
        expect(doesValidArrayExist([1, 0]))
            .toBe(false)
    })
})
