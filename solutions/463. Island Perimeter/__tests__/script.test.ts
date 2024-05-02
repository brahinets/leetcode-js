import {islandPerimeter} from '../script'

describe('463. Island Perimeter', (): void => {
    it('No islands. Empty area', (): void => {
        expect(islandPerimeter([]))
            .toBe(0)
    })

    it('Small island', (): void => {
        expect(islandPerimeter([
            [1]
        ])).toBe(4)
    })

    it('Small island and water', (): void => {
        expect(islandPerimeter([
            [1, 0]
        ])).toBe(4)
    })

    it('Big island', (): void => {
        expect(islandPerimeter([
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0]
        ])).toBe(16)
    })
})
