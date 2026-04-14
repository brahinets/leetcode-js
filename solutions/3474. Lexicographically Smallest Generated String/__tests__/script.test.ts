import { generateString } from '../script'

describe('3474. Lexicographically Smallest Generated String', (): void => {
    it('lexicographically smallest string satisfying T and F constraints', (): void => {
        expect(generateString('TFTF', 'ab'))
            .toBe('ababa')
    })

    it('empty string when T constraints conflict with each other', (): void => {
        expect(generateString('TFTF', 'abc'))
            .toBe('')
    })

    it('smallest single character not equal to str2 for single F', (): void => {
        expect(generateString('F', 'd'))
            .toBe('a')
    })

    it('str2 for single T constraint', (): void => {
        expect(generateString('T', 'abc'))
            .toBe('abc')
    })

    it('empty string when adjacent T constraints produce conflicting overlapping values', (): void => {
        expect(generateString('TT', 'ab'))
            .toBe('')
    })

    it('all-a string when F windows already differ from str2', (): void => {
        expect(generateString('FF', 'ab'))
            .toBe('aaa')
    })

    it('changes rightmost unlocked position when F window matches str2', (): void => {
        expect(generateString('FF', 'aa'))
            .toBe('aba')
    })

    it('empty string when all positions in F window are locked and match str2', (): void => {
        expect(generateString('TFT', 'aa'))
            .toBe('')
    })

    it('places T constraint correctly and leaves F windows satisfying inequality', (): void => {
        expect(generateString('FTF', 'ab'))
            .toBe('aaba')
    })
})
