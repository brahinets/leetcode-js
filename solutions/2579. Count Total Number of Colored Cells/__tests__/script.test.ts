import {coloredCells} from '../script'

describe('2579. Count Total Number of Colored Cells', (): void => {
    it('The only', (): void => {
        expect(coloredCells(1))
            .toBe(1)
    })


    it('Multiple', (): void => {
        expect(coloredCells(2))
            .toBe(5)
    })

    it('Many', (): void => {
        expect(coloredCells(10))
            .toBe(181)
    })
})
