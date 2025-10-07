import {avoidFlood} from '../script'

describe('1488. Avoid Flood in The City', (): void => {
    it('There\'s no day to dry', (): void => {
        expect(avoidFlood([1, 2, 3, 4]))
            .toEqual([-1, -1, -1, -1])
    })

    it('Scenario is flood-free', (): void => {
        expect(avoidFlood([1, 2, 0, 0, 2, 1]))
            .toEqual([-1, -1, 2, 1, -1, -1])
    })

    it('Dry on some day', (): void => {
        expect(avoidFlood([1, 2, 0, 1, 2]))
            .toEqual([])
    })
})
