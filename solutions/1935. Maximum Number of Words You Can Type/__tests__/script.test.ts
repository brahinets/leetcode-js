import {canBeTypedWords} from '../script'

describe('1935. Maximum Number of Words You Can Type', (): void => {
    it('Can type all', (): void => {
        expect(canBeTypedWords("hello world", "a"))
            .toBe(2)
    })

    it('Cannot type some', (): void => {
        expect(canBeTypedWords("leet code", "lt"))
            .toBe(1)
    })

    it('Cannot type any', (): void => {
        expect(canBeTypedWords("leet code", "e"))
            .toBe(0)
    })
})
