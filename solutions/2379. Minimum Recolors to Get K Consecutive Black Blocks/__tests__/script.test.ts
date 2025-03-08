import {minimumRecolors} from '../script'

describe('2379. Minimum Recolors to Get K Consecutive Black Blocks', (): void => {
    it('Some changes needed', (): void => {
        expect(minimumRecolors("WBBWWBBWBW", 7))
            .toBe(3)
    })

    it('No changes needed', (): void => {
        expect(minimumRecolors("WBWBBBW", 2))
            .toBe(0)
    })
})
