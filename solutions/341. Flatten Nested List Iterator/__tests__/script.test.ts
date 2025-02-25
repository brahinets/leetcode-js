import {NestedInteger, NestedIterator} from '../script'

describe('341. Flatten Nested List Iterator', (): void => {
    it('No inner level', (): void => {
        const iterator: NestedIterator = new NestedIterator([new NestedInteger(1), new NestedInteger(2), new NestedInteger(3)])
        const result: number[] = []
        while (iterator.hasNext()) {
            result.push(iterator.next())
        }

        expect(result).toEqual([1, 2, 3])
    })

    it('One inner level', (): void => {
        const iterator: NestedIterator = new NestedIterator([new NestedInteger([new NestedInteger(1), new NestedInteger(1)]), new NestedInteger(2), new NestedInteger([new NestedInteger(1), new NestedInteger(1)])])
        const result: number[] = []
        while (iterator.hasNext()) {
            result.push(iterator.next())
        }

        expect(result).toEqual([1, 1, 2, 1, 1])
    })

    it('Multiple inner level', (): void => {
        const iterator: NestedIterator = new NestedIterator([new NestedInteger(1), new NestedInteger(4), new NestedInteger(6)])
        const result: number[] = []
        while (iterator.hasNext()) {
            result.push(iterator.next())
        }

        expect(result).toEqual([1, 4, 6])
    })
})
