import {mapsAreEqual} from "../map-utils"

describe('Map Comparison', (): void => {
    it('Empty equal', (): void => {
        expect(mapsAreEqual(
            new Map<string, number>(),
            new Map<string, number>()
        )).toBe(true)
    })

    it('Non empty equal', (): void => {
        expect(mapsAreEqual(
            new Map<string, number>([["a", 1]]),
            new Map<string, number>([["a", 1]])
        )).toBe(true)
    })

    it('Non empty not equal. Different size', (): void => {
        expect(mapsAreEqual(
            new Map<string, number>([["a", 1]]),
            new Map<string, number>()
        )).toBe(false)
    })

    it('Non empty not equal. Different keys', (): void => {
        expect(mapsAreEqual(
            new Map<string, number>([["a", 1]]),
            new Map<string, number>([["b", 1]])
        )).toBe(false)
    })

    it('Non empty not equal. Different values', (): void => {
        expect(mapsAreEqual(
            new Map<string, number>([["a", 1]]),
            new Map<string, number>([["a", 2]]))
        ).toBe(false)
    })
})
