import { uniquePaths } from '../script'


describe('3665. Twisted Mirror Path Count', (): void => {
    it('example 1', (): void => {
        const grid: number[][] = [[0, 1, 0], [0, 0, 1], [1, 0, 0]]
        const result: number = uniquePaths(grid)

        expect(result)
            .toEqual(5)
    })

    it('example 2', (): void => {
        const grid: number[][] = [[0, 0], [0, 0]]
        const result: number = uniquePaths(grid)

        expect(result)
            .toEqual(2)
    })

    it('example 3', (): void => {
        const grid: number[][] = [[0, 1, 1], [1, 1, 0]]
        const result: number = uniquePaths(grid)

        expect(result)
            .toEqual(1)
    })
})
