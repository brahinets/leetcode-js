import {rotateTheBox} from '../script'

describe('1861. Rotating the Box', (): void => {
    it('One-row box', (): void => {
        expect(rotateTheBox([["#", ".", "#"]]))
            .toEqual([
                ["."],
                ["#"],
                ["#"]
            ])
    })

    it('Two-row', (): void => {
        expect(rotateTheBox([
            ["#", ".", "*", "."],
            ["#", "#", "*", "."]
        ])).toEqual([
            ["#", "."],
            ["#", "#"],
            ["*", "*"],
            [".", "."]
        ])
    })

    it('Three-row', (): void => {
        expect(rotateTheBox([
            ["#", "#", "*", ".", "*", "."],
            ["#", "#", "#", "*", ".", "."],
            ["#", "#", "#", ".", "#", "."]
        ])).toEqual([
            [".", "#", "#"],
            [".", "#", "#"],
            ["#", "#", "*"],
            ["#", "*", "."],
            ["#", ".", "*"],
            ["#", ".", "."]
        ])
    })
})
