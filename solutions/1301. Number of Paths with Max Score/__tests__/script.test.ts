import {pathsWithMaxScore} from '../script'

describe('1301. Number of Paths with Max Score', (): void => {
    it('single obstacle forces one route around it', (): void => {
        const board: string[] = ['E23', '2X2', '12S']

        const result: number[] = pathsWithMaxScore(board)

        expect(result)
            .toEqual([7, 1])
    })

    it('two distinct routes reach the same maximum score', (): void => {
        const board: string[] = ['E12', '1X1', '21S']

        const result: number[] = pathsWithMaxScore(board)

        expect(result)
            .toEqual([4, 2])
    })

    it('middle row entirely blocked leaves no route', (): void => {
        const board: string[] = ['E11', 'XXX', '11S']

        const result: number[] = pathsWithMaxScore(board)

        expect(result)
            .toEqual([0, 0])
    })

    it('minimum sized board ties between the two orthogonal detours', (): void => {
        const board: string[] = ['E9', '9S']

        const result: number[] = pathsWithMaxScore(board)

        expect(result)
            .toEqual([9, 2])
    })

    it('diagonal shortcut stays available even when the orthogonal detour is blocked', (): void => {
        const board: string[] = ['E1', 'XS']

        const result: number[] = pathsWithMaxScore(board)

        expect(result)
            .toEqual([1, 1])
    })

    it('every cell shares the same value so every route to the destination ties', (): void => {
        const board: string[] = ['E00', '000', '00S']

        const result: number[] = pathsWithMaxScore(board)

        expect(result)
            .toEqual([0, 13])
    })

    it('largest board favors the longest route and wraps the count modulo 1e9 + 7', (): void => {
        const rowCount: number = 100
        const board: string[] = []

        for (let row: number = 0; row < rowCount; row++) {
            let line: string = '9'.repeat(rowCount)

            if (row === 0) {
                line = 'E' + line.slice(1)
            }

            if (row === rowCount - 1) {
                line = line.slice(0, rowCount - 1) + 'S'
            }

            board.push(line)
        }

        const result: number[] = pathsWithMaxScore(board)

        expect(result[0])
            .toBe(9 * (2 * (rowCount - 1) - 1))
        expect(result[1])
            .toBeGreaterThanOrEqual(0)
        expect(result[1])
            .toBeLessThan(1e9 + 7)
    })
})
