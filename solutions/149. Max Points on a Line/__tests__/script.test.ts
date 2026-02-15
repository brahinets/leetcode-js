import { maxPoints } from '../script'

describe('149. Max Points on a Line', (): void => {
    it('All points collinear', (): void => {
        expect(maxPoints([[1, 1], [2, 2], [3, 3]]))
            .toBe(3)
    })

    it('Two lines, longest has 4 points', (): void => {
        expect(maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]))
            .toBe(4)
    })
})
