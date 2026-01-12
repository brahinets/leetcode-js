import {solve} from '../script'

describe('130. Surrounded Regions', (): void => {
    it('Edge cannot be surrounded', (): void => {
        const island: string[][] = [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "O", "X"],
            ["X", "O", "X", "X"]
        ]

        solve(island)

        expect(island).toEqual([
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "O", "X", "X"]
        ])
    })

    it('Simple island ', (): void => {
        const island: string[][] = [["X"]]

        solve(island)

        expect(island).toEqual([
            ["X"]
        ])
    })
})
