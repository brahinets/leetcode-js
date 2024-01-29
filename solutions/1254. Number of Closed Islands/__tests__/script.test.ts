import {closedIsland, ISLAND, WATER} from '../script'

describe('1254. Number of Closed Islands', (): void => {
    it('No islands', (): void => {
        expect(closedIsland([]))
            .toBe(0)
    })

    it('One island', (): void => {
        expect(closedIsland([
            [ISLAND, ISLAND, WATER, ISLAND, ISLAND],
            [ISLAND, WATER, ISLAND, WATER, ISLAND],
            [ISLAND, WATER, WATER, WATER, ISLAND]
        ])).toBe(1)
    })

    it('Two islands', (): void => {
        expect(closedIsland([
            [WATER, WATER, WATER, WATER, WATER, WATER, WATER, ISLAND],
            [WATER, ISLAND, ISLAND, ISLAND, ISLAND, WATER, WATER, ISLAND],
            [WATER, ISLAND, WATER, ISLAND, WATER, WATER, WATER, ISLAND],
            [WATER, ISLAND, ISLAND, ISLAND, ISLAND, WATER, ISLAND, WATER],
            [WATER, WATER, WATER, WATER, WATER, WATER, WATER, ISLAND]
        ])).toBe(2)
    })

    it('Inner islands', (): void => {
        expect(closedIsland([
            [WATER, WATER, WATER, WATER, WATER, WATER, WATER],
            [WATER, ISLAND, ISLAND, ISLAND, ISLAND, ISLAND, WATER],
            [WATER, ISLAND, WATER, WATER, WATER, ISLAND, WATER],
            [WATER, ISLAND, WATER, ISLAND, WATER, ISLAND, WATER],
            [WATER, ISLAND, WATER, WATER, WATER, ISLAND, WATER],
            [WATER, ISLAND, ISLAND, ISLAND, ISLAND, ISLAND, WATER],
            [WATER, WATER, WATER, WATER, WATER, WATER, WATER]
        ])).toBe(2)
    })

    it('Complex non-closed island on boundaries', (): void => {
        expect(closedIsland([
            [ISLAND, ISLAND, WATER, WATER, ISLAND, WATER, ISLAND, ISLAND, WATER, ISLAND],
            [WATER, WATER, ISLAND, WATER, WATER, ISLAND, WATER, WATER, WATER, ISLAND],
            [WATER, ISLAND, WATER, WATER, WATER, ISLAND, ISLAND, WATER, WATER, ISLAND],
            [ISLAND, WATER, WATER, ISLAND, ISLAND, ISLAND, ISLAND, WATER, ISLAND, WATER],
            [ISLAND, ISLAND, ISLAND, ISLAND, ISLAND, ISLAND, WATER, WATER, WATER, ISLAND],
            [ISLAND, WATER, ISLAND, WATER, ISLAND, WATER, ISLAND, WATER, WATER, WATER],
            [WATER, ISLAND, WATER, ISLAND, WATER, WATER, ISLAND, ISLAND, ISLAND, WATER],
            [WATER, WATER, WATER, WATER, WATER, WATER, ISLAND, ISLAND, ISLAND, ISLAND],
            [WATER, WATER, WATER, ISLAND, ISLAND, WATER, ISLAND, WATER, ISLAND, WATER],
            [WATER, WATER, WATER, ISLAND, WATER, WATER, ISLAND, WATER, WATER, ISLAND]
        ])).toBe(5)
    })
})
