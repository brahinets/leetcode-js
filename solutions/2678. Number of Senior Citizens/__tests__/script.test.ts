import {countSeniors} from '../script'

describe('2678. Number of Senior Citizens', (): void => {
    it('Some of the passengers are older than 60.', (): void => {
        expect(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]))
            .toBe(2)
    })

    it('None of the passengers are older than 60.', (): void => {
        expect(countSeniors(["1313579440F2036", "2921522980M5644"]))
            .toBe(0)
    })
})
