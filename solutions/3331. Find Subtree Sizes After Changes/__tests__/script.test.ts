import { findSubtreeSizes } from '../script'

describe('3331. Find Subtree Sizes After Changes', (): void => {
    it('reparents one node to a same-character ancestor', (): void => {
        const parent: number[] = [-1, 0, 0, 1, 1, 1]
        const s: string = 'abaabc'

        const result: number[] = findSubtreeSizes(parent, s)

        expect(result).toEqual([6, 3, 1, 1, 1, 1])
    })

    it('applies simultaneous reparenting where one change cascades into another', (): void => {
        const parent: number[] = [-1, 0, 4, 0, 1]
        const s: string = 'abbba'

        const result: number[] = findSubtreeSizes(parent, s)

        expect(result).toEqual([5, 2, 1, 1, 1])
    })

    it('keeps the tree unchanged when every node has a unique character', (): void => {
        const parent: number[] = [-1, 0, 1, 2]

        const result: number[] = findSubtreeSizes(parent, 'abcd')

        expect(result).toEqual([4, 3, 2, 1])
    })

    it('reparents a deep node past several ancestors to the closest same-character one', (): void => {
        const parent: number[] = [-1, 0, 1, 2]
        const s: string = 'abca'

        const result: number[] = findSubtreeSizes(parent, s)

        expect(result).toEqual([4, 2, 1, 1])
    })

    it('reparents only the nodes whose closest same-character ancestor differs from the current parent', (): void => {
        const parent: number[] = [-1, 0, 1, 1]
        const s: string = 'abba'

        const result: number[] = findSubtreeSizes(parent, s)

        expect(result).toEqual([4, 2, 1, 1])
    })

    it('handles a single-node tree', (): void => {
        const parent: number[] = [-1]
        const s: string = 'a'

        const result: number[] = findSubtreeSizes(parent, s)

        expect(result).toEqual([1])
    })

    it('keeps children attached to the root when the root shares their character', (): void => {
        const parent: number[] = [-1, 0, 0, 0]
        const s: string = 'aaaa'

        const result: number[] = findSubtreeSizes(parent, s)

        expect(result).toEqual([4, 1, 1, 1])
    })

    it('reparents a whole branch when intermediate nodes share the root character', (): void => {
        const parent: number[] = [-1, 0, 1, 2, 1]
        const s: string = 'aaaaa'

        const result: number[] = findSubtreeSizes(parent, s)

        expect(result).toEqual([5, 4, 2, 1, 1])
    })
})
