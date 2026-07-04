import {minimumScoreBetweenCities} from '../script'

describe('2492. Minimum Score of a Path Between Two Cities', (): void => {
    it('shortest scoring road sits one hop away from the destination', (): void => {
        const cityCount: number = 4
        const roads: number[][] = [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]

        const result: number = minimumScoreBetweenCities(cityCount, roads)

        expect(result)
            .toBe(5)
    })

    it('revisiting a road through a cycle uncovers a lower score', (): void => {
        const cityCount: number = 4
        const roads: number[][] = [[1, 2, 2], [1, 3, 4], [3, 4, 7]]

        const result: number = minimumScoreBetweenCities(cityCount, roads)

        expect(result)
            .toBe(2)
    })

    it('single road directly connects the two cities', (): void => {
        const cityCount: number = 2
        const roads: number[][] = [[1, 2, 7]]

        const result: number = minimumScoreBetweenCities(cityCount, roads)

        expect(result)
            .toBe(7)
    })

    it('cheaper road in a disconnected component is excluded from the score', (): void => {
        const cityCount: number = 5
        const roads: number[][] = [[1, 2, 10], [2, 5, 10], [3, 4, 1]]

        const result: number = minimumScoreBetweenCities(cityCount, roads)

        expect(result)
            .toBe(10)
    })

    it('minimum scoring road lies in the middle of a long chain', (): void => {
        const cityCount: number = 5
        const roads: number[][] = [[1, 2, 8], [2, 3, 3], [3, 4, 9], [4, 5, 6]]

        const result: number = minimumScoreBetweenCities(cityCount, roads)

        expect(result)
            .toBe(3)
    })
})
