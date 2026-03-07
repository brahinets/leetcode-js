import {minFlips} from '../script'

describe('1888. Minimum Number of Flips to Make the Binary String Alternating', (): void => {

    it('Two rotations needed before two flips', (): void => {
        expect(minFlips('111000')).toBe(2)
    })

    it('Already alternating', (): void => {
        expect(minFlips('010')).toBe(0)
    })

    it('Single flip on odd-length string', (): void => {
        expect(minFlips('1110')).toBe(1)
    })
})
