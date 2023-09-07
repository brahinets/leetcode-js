import {numIslands} from '../script'

describe('200. Number of Islands', (): void => {
    it('No islands. Empty sea', (): void => {
        expect(numIslands([]))
            .toBe(0)
    })

    it('No islands', (): void => {
        expect(numIslands([
            ["0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ])).toBe(0)
    })

    it('One island', (): void => {
        expect(numIslands([
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ])).toBe(1)
    })

    it('Multiple islands', (): void => {
        expect(numIslands([
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ])).toBe(3)
    })
})
