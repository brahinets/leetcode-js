import {hasAllCodes} from '../script'

describe('1461. Check If a String Contains All Binary Codes of Size K', (): void => {

    it('Contains all codes of size 2', (): void => {
        expect(hasAllCodes('00110110', 2))
            .toBe(true)
    })

    it('Contains all codes of size 1', (): void => {
        expect(hasAllCodes('0110', 1))
            .toBe(true)
    })

    it('Missing code "00"', (): void => {
        expect(hasAllCodes('0110', 2))
            .toBe(false)
    })

    it('String too short', (): void => {
        expect(hasAllCodes('0', 2))
            .toBe(false)
    })

    it('Single character matches', (): void => {
        expect(hasAllCodes('01', 1))
            .toBe(true)
    })
})
