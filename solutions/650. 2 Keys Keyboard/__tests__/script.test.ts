import {minSteps} from '../script'

describe('650. 2 Keys Keyboard', (): void => {
    it('Already needed count', (): void => {
        expect(minSteps(1))
            .toEqual(0)
    })

    it('Copy Paste several times', (): void => {
        expect(minSteps(3))
            .toBe(3)
    })
})
