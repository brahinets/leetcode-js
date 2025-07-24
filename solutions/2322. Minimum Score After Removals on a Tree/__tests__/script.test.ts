import {minimumScore} from "../script";

describe('2322. Minimum Score After Removals on a Tree', (): void => {
    it('Positive score', (): void => {
        expect(minimumScore([1, 5, 5, 4, 11], [[0, 1], [1, 2], [1, 3], [3, 4]]))
            .toBe(9)
    })

    it('Zero', (): void => {
        expect(minimumScore([5, 5, 2, 4, 4, 2], [[0, 1], [1, 2], [5, 2], [4, 3], [1, 3]]))
            .toBe(0)
    })
})
