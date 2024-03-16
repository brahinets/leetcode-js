import {findMaxLength} from '../script'

describe('525. Contiguous Array', (): void => {
    it('Full once', (): void => {
        expect(findMaxLength([0, 1]))
            .toBe(2)
    })

    it('Full and part', (): void => {
        expect(findMaxLength([0, 1, 0]))
            .toBe(2)
    })

    it('Multiple full', (): void => {
        expect(findMaxLength([0, 1, 0, 1]))
            .toBe(4)
    })
})
