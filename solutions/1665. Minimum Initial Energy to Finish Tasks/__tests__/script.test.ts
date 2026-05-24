import {minimumEffort} from '../script'

describe('1665. Minimum Initial Energy to Finish Tasks', (): void => {
    it('increasing energy gaps', (): void => {
        expect(minimumEffort([[1, 2], [2, 4], [4, 8]]))
            .toBe(8)
    })

    it('mixed gaps with many tasks', (): void => {
        expect(minimumEffort([[1, 3], [2, 4], [10, 11], [10, 12], [8, 9]]))
            .toBe(32)
    })

    it('all tasks with equal gap', (): void => {
        expect(minimumEffort([[1, 7], [2, 8], [3, 9], [4, 10], [5, 11], [6, 12]]))
            .toBe(27)
    })

    it('single task', (): void => {
        expect(minimumEffort([[5, 5]]))
            .toBe(5)
    })

    it('task where minimum equals actual', (): void => {
        expect(minimumEffort([[3, 3], [4, 4]]))
            .toBe(7)
    })
})
