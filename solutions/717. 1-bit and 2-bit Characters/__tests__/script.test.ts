import {isOneBitCharacter} from '../script'

describe('717. 1-bit and 2-bit Characters', (): void => {
    it('One bit', (): void => {
        expect(isOneBitCharacter([1, 0, 0]))
            .toBe(true)
    })

    it('Two bit', (): void => {
        expect(isOneBitCharacter([1, 1, 1, 0]))
            .toBe(false)
    })
})
