import {sequentialDigits} from '../script'

describe('1291. Sequential Digits', (): void => {

    it('Three digit sequential', (): void => {
        expect(sequentialDigits(200, 300))
            .toEqual([234])
    })

    it('Four digit sequential', (): void => {
        expect(sequentialDigits(1000, 13000))
            .toEqual([1234, 2345, 3456, 4567, 5678, 6789, 12345])
    })
})
