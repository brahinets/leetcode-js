import {areAlmostEqual} from '../script'

describe('1790. Check if One String Swap Can Make Strings Equal', (): void => {
    it('Already equal', (): void => {
        expect(areAlmostEqual("kelb", "kelb"))
            .toBe(true)
    })

    it('Can be done equal', (): void => {
        expect(areAlmostEqual("bank", "kanb"))
            .toBe(true)
    })

    it('Cannot be done equal', (): void => {
        expect(areAlmostEqual("attack", "defend"))
            .toBe(false)
    })
})
