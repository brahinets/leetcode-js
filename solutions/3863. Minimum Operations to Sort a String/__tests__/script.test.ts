import { minOperations } from '../script'

describe('3863. Minimum Operations to Sort a String', (): void => {
    it('one operation on the suffix already holding the minimum up front', (): void => {
        const letters: string = 'dog'

        const result: number = minOperations(letters)

        expect(result).toBe(1)
    })

    it('two operations when the minimum is buried in the middle', (): void => {
        const letters: string = 'card'

        const result: number = minOperations(letters)

        expect(result).toBe(2)
    })

    it('two element string in descending order cannot be sorted', (): void => {
        const letters: string = 'gf'

        const result: number = minOperations(letters)

        expect(result).toBe(-1)
    })

    it('already sorted string needs no operations', (): void => {
        const letters: string = 'abbcz'

        const result: number = minOperations(letters)

        expect(result).toBe(0)
    })

    it('single character is always sorted', (): void => {
        const letters: string = 'z'

        const result: number = minOperations(letters)

        expect(result).toBe(0)
    })

    it('two element string already in order needs no operations', (): void => {
        const letters: string = 'ab'

        const result: number = minOperations(letters)

        expect(result).toBe(0)
    })

    it('one operation on the prefix when the maximum already sits at the end', (): void => {
        const letters: string = 'bac'

        const result: number = minOperations(letters)

        expect(result).toBe(1)
    })

    it('two operations when the maximum can be pulled to the end first', (): void => {
        const letters: string = 'bccba'

        const result: number = minOperations(letters)

        expect(result).toBe(2)
    })

    it('three operations when the maximum leads and the minimum trails exclusively', (): void => {
        const letters: string = 'cba'

        const result: number = minOperations(letters)

        expect(result).toBe(3)
    })

    it('two element descending pair is impossible even with repeated letters', (): void => {
        const letters: string = 'ba'

        const result: number = minOperations(letters)

        expect(result).toBe(-1)
    })
})
