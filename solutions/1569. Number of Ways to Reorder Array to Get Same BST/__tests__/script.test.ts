import { numOfWays } from '../script'


describe('1569. Number of Ways to Reorder Array to Get Same BST', (): void => {
    it('single alternative interleaving around one root', (): void => {
        const nums: number[] = [2, 1, 3]

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(1)
    })

    it('independent left and right interleavings of one root', (): void => {
        const nums: number[] = [3, 4, 5, 1, 2]

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(5)
    })

    it('increasing insertion builds a chain that forbids reordering', (): void => {
        const nums: number[] = [1, 2, 3]

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(0)
    })

    it('single element', (): void => {
        const nums: number[] = [1]

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(0)
    })

    it('two elements in increasing order', (): void => {
        const nums: number[] = [1, 2]

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(0)
    })

    it('two elements in decreasing order', (): void => {
        const nums: number[] = [2, 1]

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(0)
    })

    it('complete tree of seven nodes', (): void => {
        const nums: number[] = [4, 2, 6, 1, 3, 5, 7]

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(79)
    })

    it('eight element chain from increasing insertion', (): void => {
        const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(0)
    })

    it('fifteen element complete tree', (): void => {
        const nums: number[] = balancedOrder(1, 15)

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(21964799)
    })

    it('maximum length chain of one thousand elements', (): void => {
        const nums: number[] = rangeAscending(1000)

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(0)
    })

    it('maximum length reversed chain of one thousand elements', (): void => {
        const nums: number[] = rangeDescending(1000)

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(0)
    })

    it('maximum length perfectly balanced tree', (): void => {
        const nums: number[] = balancedOrder(1, 1000)

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(718156653)
    })

    it('maximum length partitioned by parity', (): void => {
        const nums: number[] = [...rangeWithStep(1, 2, 500), ...rangeWithStep(2, 2, 500)]

        const result: number = numOfWays(nums)

        expect(result)
            .toBe(930893647)
    })
})


function rangeAscending(size: number): number[] {
    return rangeWithStep(1, 1, size)
}

function rangeDescending(size: number): number[] {
    const values: number[] = []

    for (let value: number = size; value >= 1; value--) {
        values.push(value)
    }

    return values
}

function rangeWithStep(start: number, step: number, size: number): number[] {
    const values: number[] = []

    for (let value: number = start; values.length < size; value += step) {
        values.push(value)
    }

    return values
}

function balancedOrder(low: number, high: number): number[] {
    if (low > high) {
        return []
    }

    const middle: number = Math.floor((low + high) / 2)

    return [middle, ...balancedOrder(low, middle - 1), ...balancedOrder(middle + 1, high)]
}
