import {minimumDeletions} from '../script'

describe('3085. Minimum Deletions to Make String K-Special', (): void => {
    it('Many', (): void => {
        expect(minimumDeletions("aabcaba", 0))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(minimumDeletions("dabdcbdcdcd", 2))
            .toBe(2)
    })

    it('One', (): void => {
        expect(minimumDeletions("aaabaaa", 2))
            .toBe(1)
    })
})
