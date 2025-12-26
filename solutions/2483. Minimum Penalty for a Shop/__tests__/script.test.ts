import {bestClosingTime} from '../script'

describe('2483. Minimum Penalty for a Shop', (): void => {
    it('Close soon', (): void => {
        expect(bestClosingTime("YYNY"))
            .toBe(2)
    })

    it('Close later', (): void => {
        expect(bestClosingTime("YYYY"))
            .toBe(4)
    })

    it('Close at Zero', (): void => {
        expect(bestClosingTime("NNNNN"))
            .toBe(0)
    })
})
