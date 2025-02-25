import {minLength} from '../script'

describe('2696. Minimum String Length After Removing Substrings', (): void => {
    it('Remove once', (): void => {
        expect(minLength("ABFCA"))
            .toBe(3)
    })

    it('Remove multiple times', (): void => {
        expect(minLength("ABFCACDB"))
            .toBe(2)
    })

    it('Remove nothing', (): void => {
        expect(minLength("ACBBD"))
            .toBe(5)
    })
})
