import {maximalRectangle} from '../script'

describe('85. Maximal Rectangle', (): void => {
    it('Small zeros', (): void => {
        expect(maximalRectangle([["0"]]))
            .toBe(0)
    })

    it('Small ones', (): void => {
        expect(maximalRectangle([["1"]]))
            .toBe(1)
    })

    it('Non-square sub-matrix', (): void => {
        expect(maximalRectangle([
            ["1", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"]])
        ).toBe(6)
    })

    it('Square sub-matrix', (): void => {
        expect(maximalRectangle([
            ["1", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "0"],
            ["0", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"]])
        ).toBe(4)
    })
})
