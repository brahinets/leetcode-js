import {lengthOfLastWord} from '../script'

describe('58. Length of Last Word', (): void => {
    it('Single word', (): void => {
        expect(lengthOfLastWord("Hello"))
            .toBe(5)
    })

    it('Simple phrase', (): void => {
        expect(lengthOfLastWord("Hello World"))
            .toBe(5)
    })

    it('Long phrase', (): void => {
        expect(lengthOfLastWord("luffy is still joyboy"))
            .toBe(6)
    })

    it('Complex phrase', (): void => {
        expect(lengthOfLastWord("   fly me   to   the moon  "))
            .toBe(4)
    })
})
