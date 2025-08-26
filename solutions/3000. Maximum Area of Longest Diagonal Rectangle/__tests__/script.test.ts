import {areaOfMaxDiagonal} from '../script'

describe('3000. Maximum Area of Longest Diagonal Rectangle', (): void => {
    it('Areas are different', (): void => {
        expect(areaOfMaxDiagonal([[9, 3], [8, 6]]))
            .toBe(48)
    })

    it('Both areas the same', (): void => {
        expect(areaOfMaxDiagonal([[3, 4], [4, 3]]))
            .toBe(12)
    })
})
