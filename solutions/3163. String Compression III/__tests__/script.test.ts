import {compressedString} from '../script'

describe('3163. String Compression III', (): void => {

    it('Nothing to compress', (): void => {
        expect(compressedString("abcde"))
            .toBe("1a1b1c1d1e")
    })

    it('Compress', (): void => {
        expect(compressedString("aaaaaaaaaaaaaabb"))
            .toBe("9a5a2b")
    })
})
