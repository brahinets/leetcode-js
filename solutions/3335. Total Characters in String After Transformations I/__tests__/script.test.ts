import {lengthAfterTransformations} from '../script'

describe('3335. Total Characters in String After Transformations I', (): void => {
    it('One', (): void => {
        expect(lengthAfterTransformations("abcyy", 2))
            .toBe(7)
    })

    it('Two', (): void => {
        expect(lengthAfterTransformations("azbk", 1))
            .toBe(5)
    })
})
