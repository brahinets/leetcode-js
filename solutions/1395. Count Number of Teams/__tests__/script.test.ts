import {numTeams} from '../script'

describe('1395. Count Number of Teams', (): void => {

    it('Form multiple', (): void => {
        expect(numTeams([2, 5, 3, 4, 1]))
            .toBe(3)
    })

    it('Form multiple #2', (): void => {
        expect(numTeams([1, 2, 3, 4]))
            .toBe(4)
    })

    it('Cannot form', (): void => {
        expect(numTeams([2, 1, 3]))
            .toBe(0)
    })
})
