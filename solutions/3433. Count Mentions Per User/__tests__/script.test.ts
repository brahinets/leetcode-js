import {countMentions} from '../script'

describe('3433. Count Mentions Per User', (): void => {
    it('One', (): void => {
        expect(countMentions(2, [["MESSAGE", "10", "id1 id0"], ["OFFLINE", "11", "0"], ["MESSAGE", "71", "HERE"]]))
            .toEqual([2, 2])
    })

    it('Two', (): void => {
        expect(countMentions(2, [["MESSAGE", "10", "id1 id0"], ["OFFLINE", "11", "0"], ["MESSAGE", "12", "ALL"]]))
            .toEqual([2, 2])
    })

    it('Three', (): void => {
        expect(countMentions(2, [["OFFLINE", "10", "0"], ["MESSAGE", "12", "HERE"]]))
            .toEqual([0, 1])
    })
})
