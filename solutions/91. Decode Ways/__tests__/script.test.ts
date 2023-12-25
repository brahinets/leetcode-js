import {numDecodings} from '../script'

describe('91. Decode Ways', (): void => {

    it('No ways', (): void => {
        expect(numDecodings("06"))
            .toBe(0)
    })

    it('Two ways', (): void => {
        expect(numDecodings("12"))
            .toBe(2)
    })

    it('Many ways', (): void => {
        expect(numDecodings("226"))
            .toBe(3)
    })
})
