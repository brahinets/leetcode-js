import {grayCode} from '../script'

describe('89. Gray Code', (): void => {
    it('Complex', (): void => {
        expect(grayCode(2))
            .toEqual([0, 1, 3, 2])
    })

    it('Simple', (): void => {
        expect(grayCode(1))
            .toEqual([0, 1])
    })
})
