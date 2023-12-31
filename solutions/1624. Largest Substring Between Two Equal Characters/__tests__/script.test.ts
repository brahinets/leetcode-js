import {maxLengthBetweenEqualCharacters} from '../script'

describe('1624. Largest Substring Between Two Equal Characters', (): void => {

    it('No substring', (): void => {
        expect(maxLengthBetweenEqualCharacters("cbzxy"))
            .toBe(-1)
    })

    it('Empty substring', (): void => {
        expect(maxLengthBetweenEqualCharacters("aa"))
            .toBe(0)
    })

    it('Non empty substring', (): void => {
        expect(maxLengthBetweenEqualCharacters("abca"))
            .toBe(2)
    })
})
