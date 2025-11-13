import {maxOperations} from '../script'

describe('3228. Maximum Number of Operations to Move Ones to the End', (): void => {
    it('Can do multiple operations', (): void => {
        expect(maxOperations("1001101"))
            .toBe(4)
    })

    it('Can do one operation', (): void => {
        expect(maxOperations("0101"))
            .toBe(1)
    })

    it('Cannot do any operations', (): void => {
        expect(maxOperations("00111"))
            .toBe(0)
    })
})
