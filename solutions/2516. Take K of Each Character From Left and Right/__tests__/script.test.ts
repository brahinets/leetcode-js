import {takeCharacters} from '../script'

describe('2516. Take K of Each Character From Left and Right', (): void => {
    it('Possible', (): void => {
        expect(takeCharacters("aabaaaacaabc", 2))
            .toBe(8)
    })

    it('Not possible', (): void => {
        expect(takeCharacters("a", 1))
            .toBe(-1)
    })
})
