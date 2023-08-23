import {reorganizeString} from '../script'

describe('767. Reorganize String', (): void => {
    it('Possible', (): void => {
        expect(reorganizeString("aab"))
            .toBe("aba")
    })

    it('Impossible', (): void => {
        expect(reorganizeString("aaab"))
            .toBe("")
    })
})
