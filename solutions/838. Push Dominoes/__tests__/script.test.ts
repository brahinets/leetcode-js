import {pushDominoes} from '../script'

describe('838. Push Dominoes', (): void => {
    it('One', (): void => {
        expect(pushDominoes("RR.L"))
            .toBe("RR.L")
    })

    it('Two', (): void => {
        expect(pushDominoes(".L.R...LR..L.."))
            .toBe("LL.RR.LLRRLL..")
    })
})
