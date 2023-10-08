import {summaryRanges} from '../script'

describe('228. Summary Ranges', (): void => {
    it('One range', (): void => {
        expect(summaryRanges([0, 1, 2]))
            .toStrictEqual(["0->2"])
    })

    it('Multiple ranges', (): void => {
        expect(summaryRanges([0, 1, 2, 5, 6, 7]))
            .toStrictEqual(["0->2", "5->7"])
    })

    it('Ends with singular range', (): void => {
        expect(summaryRanges([0, 1, 2, 4, 5, 7]))
            .toStrictEqual(["0->2", "4->5", "7"])
    })

    it('Starts with singular range', (): void => {
        expect(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
            .toStrictEqual(["0", "2->4", "6", "8->9"])
    })
})
