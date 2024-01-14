import {getHint} from '../script'

describe('299. Bulls and Cows', (): void => {
    it('Unique', (): void => {
        expect(getHint("1807", "7810"))
            .toBe("1A3B")
    })

    it('Duplicates', (): void => {
        expect(getHint("1123", "0111"))
            .toBe("1A1B")
    })

    it('Multiple duplicates', (): void => {
        expect(getHint("1122", "2211"))
            .toBe("0A4B")
    })
})
