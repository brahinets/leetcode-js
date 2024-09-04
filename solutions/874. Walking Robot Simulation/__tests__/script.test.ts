import {robotSim} from '../script'

describe('874. Walking Robot Simulation', (): void => {
    it('No obstacles', (): void => {
        expect(robotSim([4, -1, 3], []))
            .toBe(25)
    })

    it('No obstacles 2', (): void => {
        expect(robotSim([6, -1, -1, 6], []))
            .toBe(36)
    })

    it('Get blocked by the obstacle', (): void => {
        expect(robotSim([4, -1, 4, -2, 4], [[2, 4]]))
            .toBe(65)
    })
})
