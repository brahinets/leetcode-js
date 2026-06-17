import { processStr } from '../script'

describe('3614. Process String with Special Operations II', (): void => {
    it('duplicates then appends then reverses then removes last character', (): void => {
        const input: string = 'a#b%*'
        const position: number = 1

        const result: string = processStr(input, position)

        expect(result)
            .toBe('a')
    })

    it('reverses then duplicates then removes then duplicates again', (): void => {
        const input: string = 'cd%#*#'
        const position: number = 3

        const result: string = processStr(input, position)

        expect(result)
            .toBe('d')
    })

    it('position out of bounds on empty result string', (): void => {
        const input: string = 'z*#'
        const position: number = 0

        const result: string = processStr(input, position)

        expect(result)
            .toBe('.')
    })

    it('position zero on single character', (): void => {
        const input: string = 'a'
        const position: number = 0

        const result: string = processStr(input, position)

        expect(result)
            .toBe('a')
    })

    it('position out of bounds on non-empty result', (): void => {
        const input: string = 'ab'
        const position: number = 5

        const result: string = processStr(input, position)

        expect(result)
            .toBe('.')
    })

    it('duplicate doubles string and second half mirrors first', (): void => {
        const input: string = 'ab#'
        const position: number = 3

        const result: string = processStr(input, position)

        expect(result)
            .toBe('b')
    })

    it('reverse flips character order', (): void => {
        const input: string = 'abc%'
        const position: number = 0

        const result: string = processStr(input, position)

        expect(result)
            .toBe('c')
    })

    it('star removes last character so previous becomes last', (): void => {
        const input: string = 'abc*'
        const position: number = 1

        const result: string = processStr(input, position)

        expect(result)
            .toBe('b')
    })

    it('star on empty string is no-op', (): void => {
        const input: string = '*a'
        const position: number = 0

        const result: string = processStr(input, position)

        expect(result)
            .toBe('a')
    })

    it('large position in massively duplicated string maps to correct source character', (): void => {
        const input: string = 'ab#####'
        const position: number = 60

        const result: string = processStr(input, position)

        expect(result)
            .toBe('a')
    })

    it('reverse then duplicate then position in second half maps through both operations', (): void => {
        const input: string = 'abc%#'
        const position: number = 4

        const result: string = processStr(input, position)

        expect(result)
            .toBe('b')
    })
})
