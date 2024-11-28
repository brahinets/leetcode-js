import {minimumObstacles} from '../script'

describe('2290. Minimum Obstacle Removal to Reach Corner', (): void => {
    it('Remove some obstacles', (): void => {
        expect(minimumObstacles([[0, 1, 1], [1, 1, 0], [1, 1, 0]]))
            .toBe(2)
    })

    it('Remove some obstacles #2', (): void => {
        expect(minimumObstacles([[0, 1, 1, 1, 0]]))
            .toBe(3)
    })

    it('No need to remove any obstacles', (): void => {
        expect(minimumObstacles([[0, 1, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0]]))
            .toBe(0)
    })
})
