import {minimumPushes} from '../script'

describe('3014. Minimum Number of Pushes to Type Word I', (): void => {
    it('word fits within a single push per key', (): void => {
        expect(minimumPushes('abcde'))
            .toBe(5)
    })

    it('word spans more than one push per key', (): void => {
        expect(minimumPushes('xycdefghij'))
            .toBe(12)
    })

    it('single letter word', (): void => {
        expect(minimumPushes('a'))
            .toBe(1)
    })

    it('word exactly fills eight keys', (): void => {
        expect(minimumPushes('abcdefgh'))
            .toBe(8)
    })
})
