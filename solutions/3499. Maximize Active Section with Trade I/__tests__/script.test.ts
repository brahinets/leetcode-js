import { maxActiveSectionsAfterTrade } from '../script'

describe('3499. Maximize Active Section with Trade I', (): void => {
    it('handles zero', (): void => {
        const input: string = '0'

        const result: number = maxActiveSectionsAfterTrade(input)

        expect(result).toBe(0)
    })

    it('handles mix', (): void => {
        const input: string = '10110'

        const result: number = maxActiveSectionsAfterTrade(input)

        expect(result).toBe(5)
    })


    it('handles ones', (): void => {
        const input: string = '11'

        const result: number = maxActiveSectionsAfterTrade(input)

        expect(result).toBe(2)
    })

    it('handles single one with trailing zeros', (): void => {
        const input: string = '01'

        const result: number = maxActiveSectionsAfterTrade(input)

        expect(result).toBe(1)
    })

    it('converts middle zero section to one', (): void => {
        const input: string = '0100'

        const result: number = maxActiveSectionsAfterTrade(input)

        expect(result).toBe(4)
    })

    it('merges two zero blocks when surrounded by ones', (): void => {
        const input: string = '1000100'

        const result: number = maxActiveSectionsAfterTrade(input)

        expect(result).toBe(7)
    })

    it('handles alternating pattern optimally', (): void => {
        const input: string = '01010'

        const result: number = maxActiveSectionsAfterTrade(input)

        expect(result).toBe(4)
    })
})
