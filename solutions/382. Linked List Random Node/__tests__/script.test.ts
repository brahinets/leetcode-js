import {Solution} from '../script'
import {linkedListOf} from "../../../common/list-utils";

describe('382. Linked List Random Node', (): void => {
    it('Test bounds', (): void => {
        const solution: Solution = new Solution(linkedListOf(1, 2, 3))

        expect([1, 2, 3]).toContain(solution.getRandom())
        expect([1, 2, 3]).toContain(solution.getRandom())
        expect([1, 2, 3]).toContain(solution.getRandom())
    })

    it('Test uniformed distribution of values', (): void => {
        const solution: Solution = new Solution(linkedListOf(1, 2, 3))

        const generatedValues: Set<number> = new Set<number>()
        generatedValues.add(solution.getRandom())
        generatedValues.add(solution.getRandom())
        generatedValues.add(solution.getRandom())
        generatedValues.add(solution.getRandom())
        generatedValues.add(solution.getRandom())

        expect(generatedValues.size).toBeGreaterThan(1)
    })
})
