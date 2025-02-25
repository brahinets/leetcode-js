import {appendCharacters} from '../script'

describe('2486. Append Characters to String to Make Subsequence', (): void => {

    it('Already a subsequence', (): void => {
        expect(appendCharacters("abcde", "a"))
            .toBe(0)
    })

    it('Append entire word', (): void => {
        expect(appendCharacters("z", "abcde"))
            .toBe(5)
    })

    it('Append part of the word', (): void => {
        expect(appendCharacters("coaching", "coding"))
            .toBe(4)
    })
})

