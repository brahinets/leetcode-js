import {matrixScore} from '../script'

describe('861. Score After Flipping Matrix', (): void => {
    it('No options', (): void => {
        expect(matrixScore([
            [1]
        ])).toBe(1)
    })

    it('The only option', (): void => {
        expect(matrixScore([
            [0]
        ])).toBe(1)
    })

    it('Multiple splits', (): void => {
        expect(matrixScore([
            [0, 0, 1, 1],
            [1, 0, 1, 0],
            [1, 1, 0, 0]
        ])).toBe(39)
    })
})
