import {numSub} from '../script'

describe('1513. Number of Substrings With Only 1s', (): void => {
    it('Many substring contains only 1', (): void => {
        expect(numSub("0110111"))
            .toBe(9)
    })

    it('Few substring contains only 1', (): void => {
        expect(numSub("101"))
            .toBe(2)
    })

    it('Each substring contains only 1', (): void => {
        expect(numSub("111111"))
            .toBe(21)
    })
})
