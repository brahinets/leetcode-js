import {getLastMoment} from '../script'

describe('1503. Last Moment Before All Ants Fall Out of a Plank', (): void => {

    it('Ants are moving to both sides at start', (): void => {
        expect(getLastMoment(4, [4, 3], [0, 1]))
            .toBe(4)
    })

    it('All move to the right side', (): void => {
        expect(getLastMoment(7, [], [0, 1, 2, 3, 4, 5, 6, 7]))
            .toBe(7)
    })

    it('All moves to the left side', (): void => {
        expect(getLastMoment(7, [0, 1, 2, 3, 4, 5, 6, 7], []))
            .toBe(7)
    })
})
