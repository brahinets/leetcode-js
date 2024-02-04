import {countOdds} from '../script'

describe('1523. Count Odd Numbers in an Interval Range', (): void => {
    it('Neither odd', (): void => {
        expect(countOdds(10, 10))
            .toBe(0)
    })

    it('One odd', (): void => {
        expect(countOdds(8, 10))
            .toBe(1)
    })

    it('Multiple odds', (): void => {
        expect(countOdds(3, 7))
            .toBe(3)
    })
})
