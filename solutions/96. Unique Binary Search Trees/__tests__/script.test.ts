import {numTrees} from '../script'

describe('96. Unique Binary Search Trees', (): void => {
    it('Simple', (): void => {
        expect(numTrees(1))
            .toBe(1)
    })

    it('Complex', (): void => {
        expect(numTrees(3))
            .toBe(5)
    })
})
