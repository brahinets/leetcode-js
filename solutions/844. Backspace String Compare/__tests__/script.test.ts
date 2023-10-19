import {backspaceCompare} from '../script'

describe('844. Backspace String Compare', (): void => {
    it('Symmetric equal', (): void => {
        expect(backspaceCompare("ab#c", "ad#c"))
            .toBe(true)
    })

    it('Non-Symmetric equal', (): void => {
        expect(backspaceCompare("ab##", "c#d#"))
            .toBe(true)
    })

    it('Non equal', (): void => {
        expect(backspaceCompare("a#c", "b"))
            .toBe(false)
    })
})
