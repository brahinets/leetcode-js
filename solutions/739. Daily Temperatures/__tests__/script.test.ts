import {dailyTemperatures} from '../script'

describe('739. Daily Temperatures', (): void => {

    it('Zero days', (): void => {
        expect(dailyTemperatures([]))
            .toStrictEqual([])
    })

    it('Few days', (): void => {
        expect(dailyTemperatures([30, 60, 90]))
            .toStrictEqual([1, 1, 0])
    })

    it('Few days again', (): void => {
        expect(dailyTemperatures([30, 40, 50, 60]))
            .toStrictEqual([1, 1, 1, 0])
    })

    it('Many days', (): void => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
            .toStrictEqual([1, 1, 4, 2, 1, 1, 0, 0])
    })
})
