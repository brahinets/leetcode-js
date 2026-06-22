import {maxNumberOfBalloons} from '../script'

describe('1189. Maximum Number of Balloons', (): void => {
    it('forms one balloon when each required character appears the minimum number of times', (): void => {
        const text: string = 'nlaebolko'

        const result: number = maxNumberOfBalloons(text)

        expect(result)
            .toBe(1)
    })

    it('forms multiple balloons when characters appear in sufficient multiples', (): void => {
        const text: string = 'loonbalxballpoon'

        const result: number = maxNumberOfBalloons(text)

        expect(result)
            .toBe(2)
    })

    it('forms no balloons when required characters are absent', (): void => {
        const text: string = 'leetcode'

        const result: number = maxNumberOfBalloons(text)

        expect(result)
            .toBe(0)
    })

    it('forms no balloons when double-needed characters are insufficient', (): void => {
        const text: string = 'balon'

        const result: number = maxNumberOfBalloons(text)

        expect(result)
            .toBe(0)
    })

    it('is limited by the character needing two occurrences per balloon', (): void => {
        const text: string = 'balloonballoon'

        const result: number = maxNumberOfBalloons(text)

        expect(result)
            .toBe(2)
    })

    it('forms no balloons from a single character', (): void => {
        const text: string = 'b'

        const result: number = maxNumberOfBalloons(text)

        expect(result)
            .toBe(0)
    })
})
