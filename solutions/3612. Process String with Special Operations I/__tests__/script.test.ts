import { processString } from '../script'

describe('3612. Process String with Special Operations I', (): void => {
    it('duplicates then appends then reverses then removes last character', (): void => {
        const input: string = 'a#b%*'

        const result: string = processString(input)

        expect(result)
            .toBe('ba')
    })

    it('removes single character then duplicates empty string', (): void => {
        const input: string = 'z*#'

        const result: string = processString(input)

        expect(result)
            .toBe('')
    })

    it('single lowercase letter', (): void => {
        const input: string = 'a'

        const result: string = processString(input)

        expect(result)
            .toBe('a')
    })

    it('remove on empty string is a no-op', (): void => {
        const input: string = '*'

        const result: string = processString(input)

        expect(result)
            .toBe('')
    })

    it('reverse of empty string is empty', (): void => {
        const input: string = '%'

        const result: string = processString(input)

        expect(result)
            .toBe('')
    })

    it('duplicate grows string correctly', (): void => {
        const input: string = 'ab#'

        const result: string = processString(input)

        expect(result)
            .toBe('abab')
    })

    it('multiple special operations chained', (): void => {
        const input: string = 'abc%#*'

        const result: string = processString(input)

        expect(result)
            .toBe('cbacb')
    })

    it('all removes on single characters leaves empty string', (): void => {
        const input: string = 'ab**'

        const result: string = processString(input)

        expect(result)
            .toBe('')
    })
})
