import {fullJustify} from '../script'

describe('68. Text Justification', (): void => {
    it('Example 1', (): void => {
        const words: string[] = ["This", "is", "an", "example", "of", "text", "justification."]
        const maxWidth: number = 16
        const output: string[] = [
            "This    is    an",
            "example  of text",
            "justification.  "
        ]

        expect(fullJustify(words, maxWidth)).toEqual(output)
    })

    it('Example 2', (): void => {
        const words: string[] = ["What", "must", "be", "acknowledgment", "shall", "be"]
        const maxWidth: number = 16
        const output: string[] = [
            "What   must   be",
            "acknowledgment  ",
            "shall be        "
        ]

        expect(fullJustify(words, maxWidth)).toEqual(output)
    })

    it('Example 3', (): void => {
        const words: string[] = ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain",
            "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"]
        const maxWidth: number = 20
        const output: string[] = [
            "Science  is  what we",
            "understand      well",
            "enough to explain to",
            "a  computer.  Art is",
            "everything  else  we",
            "do                  "
        ]

        expect(fullJustify(words, maxWidth)).toEqual(output)
    })

    it('Single word fits exactly', (): void => {
        const words: string[] = ["Hello"]
        const maxWidth: number = 5
        const output: string[] = ["Hello"]

        expect(fullJustify(words, maxWidth)).toEqual(output)
    })

    it('Single word shorter than maxWidth', (): void => {
        const words: string[] = ["Hi"]
        const maxWidth: number = 5
        const output: string[] = ["Hi   "]

        expect(fullJustify(words, maxWidth)).toEqual(output)
    })
})
