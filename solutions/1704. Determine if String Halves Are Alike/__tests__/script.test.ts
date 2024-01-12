import {halvesAreAlike} from '../script'

describe('1704. Determine if String Halves Are Alike', (): void => {

    it('Alike', (): void => {
        expect(halvesAreAlike("book"))
            .toBe(true)
    })

    it('Not alike', (): void => {
        expect(halvesAreAlike("textbook"))
            .toBe(false)
    })
})


