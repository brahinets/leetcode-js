import {minimumPushes} from '../script'

describe('3016. Minimum Number of Pushes to Type Word II', (): void => {
    it('Remap some', (): void => {
        expect(minimumPushes("abcde"))
            .toBe(5)
    })

    it('Remap some #2', (): void => {
        expect(minimumPushes("aabbccddeeffgghhiiiiii"))
            .toBe(24)
    })

    it('Remap all', (): void => {
        expect(minimumPushes("xyzxyzxyzxyz"))
            .toBe(12)
    })
})
