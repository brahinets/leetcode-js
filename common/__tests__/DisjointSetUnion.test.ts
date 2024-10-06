import {DisjointSetUnion} from "../DisjointSetUnion"

describe('DisjointSetUnion test', (): void => {
    it('Two elements', (): void => {
        const disjointSetUnion: DisjointSetUnion = new DisjointSetUnion(2)

        expect(disjointSetUnion.find(0))
            .toBe(0)
        expect(disjointSetUnion.find(1))
            .toBe(1)
        expect(disjointSetUnion.union(0, 1))
            .toBe(true)
        expect(disjointSetUnion.find(0))
            .toBe(0)
        expect(disjointSetUnion.find(1))
            .toBe(0)
    })

    it('Three elements', (): void => {
        const disjointSetUnion: DisjointSetUnion = new DisjointSetUnion(3)

        expect(disjointSetUnion.find(0))
            .toBe(0)
        expect(disjointSetUnion.find(1))
            .toBe(1)
        expect(disjointSetUnion.find(2))
            .toBe(2)
        expect(disjointSetUnion.union(0, 1))
            .toBe(true)
        expect(disjointSetUnion.find(0))
            .toBe(0)
        expect(disjointSetUnion.find(1))
            .toBe(0)
        expect(disjointSetUnion.find(2))
            .toBe(2)
        expect(disjointSetUnion.union(1, 2))
            .toBe(true)
        expect(disjointSetUnion.find(0))
            .toBe(0)
        expect(disjointSetUnion.find(1))
            .toBe(0)
        expect(disjointSetUnion.find(2))
            .toBe(0)
    })

    it('Union of already connected elements', (): void => {
        const disjointSetUnion: DisjointSetUnion = new DisjointSetUnion(2)

        disjointSetUnion.union(0, 1)

        expect(disjointSetUnion.union(0, 1))
            .toBe(false)
    })

    it('Find operation on a larger set', (): void => {
        const disjointSetUnion: DisjointSetUnion = new DisjointSetUnion(10)

        for (let i = 0; i < 9; i++) {
            disjointSetUnion.union(i, i + 1)
        }

        for (let i = 0; i < 10; i++) {
            expect(disjointSetUnion.find(i))
                .toBe(0)
        }
    })
})
