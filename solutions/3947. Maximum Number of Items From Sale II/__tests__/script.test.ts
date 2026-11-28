import { maximumSaleItems } from '../script'

describe('3947. Maximum Number of Items From Sale II', (): void => {
    it('divisibility spread across affordable items', (): void => {
        expect(maximumSaleItems([[1, 6], [2, 4], [3, 5]], 19)).toBe(5)
    })

    it('overlapping divisibility chains with mixed prices', (): void => {
        expect(
            maximumSaleItems(
                [[2, 8], [1, 10], [6, 6], [4, 12], [5, 20], [5, 17]],
                35
            )
        ).toBe(7)
    })

    it('budget affords no item', (): void => {
        expect(maximumSaleItems([[5, 10], [3, 7]], 6)).toBe(0)
    })

    it('single item whose factor divides only itself', (): void => {
        expect(maximumSaleItems([[7, 3]], 10)).toBe(3)
    })

    it('duplicate factors give each other free copies', (): void => {
        expect(maximumSaleItems([[6, 3], [6, 3]], 6)).toBe(4)
    })

    it('cheap plain copies beat an expensive booster', (): void => {
        expect(maximumSaleItems([[1, 10], [2, 1]], 10)).toBe(10)
    })

    it('expensive booster skipped in favor of plain copies', (): void => {
        expect(maximumSaleItems([[1, 10], [2, 3]], 10)).toBe(3)
    })

    it('boosted copies capped by distinct divisible items', (): void => {
        expect(maximumSaleItems([[2, 5], [4, 5], [8, 5]], 10)).toBe(4)
    })

    it('leftover budget spent on cheapest plain copies', (): void => {
        expect(maximumSaleItems([[1, 6], [2, 4]], 10)).toBe(3)
    })

    it('several boosters purchased before plain copies', (): void => {
        expect(maximumSaleItems([[1, 2], [2, 3], [4, 100]], 10)).toBe(7)
    })

    it('minimum price item also provides boosted copies', (): void => {
        expect(maximumSaleItems([[1, 2], [3, 4]], 8)).toBe(5)
    })

    it('matches exhaustive search on random small sales', (): void => {
        const generateRandom: () => number = createRandomGenerator(42)

        for (let caseIndex: number = 0; caseIndex < 300; caseIndex++) {
            const itemCount: number = 1 + Math.floor(generateRandom() * 5)
            const items: number[][] = []

            for (let index: number = 0; index < itemCount; index++) {
                const factor: number = 1 + Math.floor(generateRandom() * 6)
                const price: number = 1 + Math.floor(generateRandom() * 8)

                items.push([factor, price])
            }

            const budget: number = 1 + Math.floor(generateRandom() * 24)
            const actualCount: number = maximumSaleItems(items, budget)
            const expectedCount: number =
                maximumSaleItemsByExhaustiveSearch(items, budget)

            if (actualCount !== expectedCount) {
                throw new Error(
                    `Mismatch for items ${JSON.stringify(items)} ` +
                        `and budget ${budget}: ` +
                        `${actualCount} instead of ${expectedCount}`
                )
            }

            expect(actualCount).toEqual(expectedCount)
        }
    })
})

function maximumSaleItemsByExhaustiveSearch(
    items: number[][],
    budget: number
): number {
    const freeCopyLimits: number[] = items.map((item: number[]): number => {
        let divisibleCount: number = 0

        for (const other of items) {
            if (other[0] % item[0] === 0) {
                divisibleCount++
            }
        }

        return divisibleCount - 1
    })

    let bestValues: number[] = new Array<number>(budget + 1).fill(0)

    for (let index: number = 0; index < items.length; index++) {
        const price: number = items[index][1]
        const freeCopyLimit: number = freeCopyLimits[index]
        const nextValues: number[] = bestValues.slice()

        for (let spent: number = price; spent <= budget; spent++) {
            let bestWithValue: number = nextValues[spent]

            for (let copies: number = 1; copies * price <= spent; copies++) {
                const candidateValue: number =
                    bestValues[spent - copies * price] +
                    copies +
                    Math.min(copies, freeCopyLimit)

                if (candidateValue > bestWithValue) {
                    bestWithValue = candidateValue
                }
            }

            nextValues[spent] = bestWithValue
        }

        bestValues = nextValues
    }

    return bestValues[budget]
}

function createRandomGenerator(seed: number): () => number {
    let state: number = seed

    return (): number => {
        state = (state * 1103515245 + 12345) % 2147483648

        return state / 2147483648
    }
}
