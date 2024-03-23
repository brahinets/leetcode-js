import {minimumOneBitOperations} from '../script'

describe('1611. Minimum One Bit Operations to Make Integers Zero', (): void => {

    it('First', (): void => {
        expect(minimumOneBitOperations(3))
            .toBe(2)
    })

    it('Second', (): void => {
        expect(minimumOneBitOperations(6))
            .toBe(4)
    })
})
