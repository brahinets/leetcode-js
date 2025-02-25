import {minChanges} from '../script'

describe('2914. Minimum Number of Changes to Make Binary String Beautiful', (): void => {
    it('Multiple changes needed', (): void => {
        expect(minChanges("1001"))
            .toBe(2)
    })

    it('Only one change needed', (): void => {
        expect(minChanges("10"))
            .toBe(1)
    })

    it('No changes needed', (): void => {
        expect(minChanges("0000"))
            .toBe(0)
    })
})
