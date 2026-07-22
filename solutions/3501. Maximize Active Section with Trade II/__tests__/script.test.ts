import { maxActiveSectionsAfterTrade } from '../script'

describe('3501. Maximize Active Section with Trade II', (): void => {
    it('single zero followed by one allows no trade', (): void => {
        const input: string = '01'
        const queries: number[][] = [[0, 1]]

        const result: number[] = maxActiveSectionsAfterTrade(input, queries)

        expect(result).toEqual([1])
    })

    it('handles overlapping ranges over a trailing zero block', (): void => {
        const input: string = '0100'
        const queries: number[][] = [[0, 3], [0, 2], [1, 3], [2, 3]]

        const result: number[] = maxActiveSectionsAfterTrade(input, queries)

        expect(result).toEqual([4, 3, 1, 1])
    })

    it('merges adjacent zero blocks within the range', (): void => {
        const input: string = '1000100'
        const queries: number[][] = [[1, 5], [0, 6], [0, 4]]

        const result: number[] = maxActiveSectionsAfterTrade(input, queries)

        expect(result).toEqual([6, 7, 2])
    })

    it('handles alternating pattern across ranges', (): void => {
        const input: string = '01010'
        const queries: number[][] = [[0, 3], [1, 4], [1, 3]]

        const result: number[] = maxActiveSectionsAfterTrade(input, queries)

        expect(result).toEqual([4, 4, 2])
    })

    it('a range covering only ones yields no gain', (): void => {
        const input: string = '1110111'
        const queries: number[][] = [[0, 2]]

        const result: number[] = maxActiveSectionsAfterTrade(input, queries)

        expect(result).toEqual([6])
    })

    it('a range with a single zero block cannot trade', (): void => {
        const input: string = '100001'
        const queries: number[][] = [[1, 4]]

        const result: number[] = maxActiveSectionsAfterTrade(input, queries)

        expect(result).toEqual([2])
    })

    it('picks the best interior adjacent pair among several zero blocks', (): void => {
        const input: string = '1001001000001'
        const queries: number[][] = [[0, 12]]

        const result: number[] = maxActiveSectionsAfterTrade(input, queries)

        expect(result).toEqual([11])
    })

    it('clips boundary zero blocks to the queried range', (): void => {
        const input: string = '000100010001000'
        const queries: number[][] = [[2, 12]]

        const result: number[] = maxActiveSectionsAfterTrade(input, queries)

        expect(result).toEqual([9])
    })

    it('whole string of zeros allows no active sections', (): void => {
        const input: string = '0000'
        const queries: number[][] = [[0, 3], [1, 2]]

        const result: number[] = maxActiveSectionsAfterTrade(input, queries)

        expect(result).toEqual([0, 0])
    })
})
