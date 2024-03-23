import {getLengthOfOptimalCompression} from '../script'

describe('1531. String Compression II', (): void => {

    it('Delete multiple single occurrences', (): void => {
        expect(getLengthOfOptimalCompression("aaabcccd", 2))
            .toBe(4)
    })

    it('Delete one non-single occurrence', (): void => {
        expect(getLengthOfOptimalCompression("aabbaa", 2))
            .toBe(2)
    })

    it('Not allowed to delete', (): void => {
        expect(getLengthOfOptimalCompression("aaaaaaaaaaa", 0))
            .toBe(3)
    })
})
