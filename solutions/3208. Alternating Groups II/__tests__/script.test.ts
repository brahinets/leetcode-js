import {numberOfAlternatingGroups} from '../script'

describe('3208. Alternating Groups II', (): void => {
    it('Many', (): void => {
        expect(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3))
            .toBe(3)
    })


    it('Two', (): void => {
        expect(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6))
            .toBe(2)
    })


    it('The only', (): void => {
        expect(numberOfAlternatingGroups([0, 1, 1], 1))
            .toBe(1)
    })

    it('No', (): void => {
        expect(numberOfAlternatingGroups([1, 1, 0, 1], 4))
            .toBe(0)
    })
})
