import {halvesAreAlike} from '../script'

describe('1704. Determine if String Halves Are Alike', (): void => {

    it('Alike by exact match', (): void => {
        expect(halvesAreAlike("book"))
            .toBe(true)
    })

    it('Alike by count match', (): void => {
        expect(halvesAreAlike("AbCdEfGh"))
            .toBe(true)
    })

    it('Not alike', (): void => {
        expect(halvesAreAlike("textbook"))
            .toBe(false)
    })
})


