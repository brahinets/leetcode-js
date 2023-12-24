import {minOperations} from '../script'

describe('1758. Minimum Changes To Make Alternating Binary String', (): void => {

    it('No changes needed, string is already alternating ', (): void => {
        expect(minOperations("10"))
            .toBe(0)
    })

    it('One change needed, string is almost alternating', (): void => {
        expect(minOperations("0100"))
            .toBe(1)
    })

    it('Multiple changes needed, string is not alternating', (): void => {
        expect(minOperations("1111"))
            .toBe(2)
    })
})
