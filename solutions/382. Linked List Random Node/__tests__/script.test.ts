import {ListNode, Solution} from '../script'

describe('382. Linked List Random Node', (): void => {
    it('Test bounds', (): void => {
        const solution: Solution = new Solution(
            new ListNode(1, new ListNode(2, new ListNode(3)))
        )

        expect([1, 2, 3]).toContain(solution.getRandom())
        expect([1, 2, 3]).toContain(solution.getRandom())
        expect([1, 2, 3]).toContain(solution.getRandom())
    })

    it('Test uniformed distribution of values', (): void => {
        const solution: Solution = new Solution(
            new ListNode(1, new ListNode(2, new ListNode(3)))
        )

        const generatedValues: Set<number> = new Set<number>()
        generatedValues.add(solution.getRandom())
        generatedValues.add(solution.getRandom())
        generatedValues.add(solution.getRandom())
        generatedValues.add(solution.getRandom())
        generatedValues.add(solution.getRandom())

        expect(generatedValues.size).toBeGreaterThan(1)
    })
})
