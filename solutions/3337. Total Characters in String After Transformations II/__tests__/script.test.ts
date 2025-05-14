import {lengthAfterTransformations} from '../script'

describe('3337. Total Characters in String After Transformations II', (): void => {
    it('One', (): void => {
        expect(lengthAfterTransformations("abcyy", 2, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]))
            .toBe(7)
    })

    it('Two', (): void => {
        expect(lengthAfterTransformations("azbk", 1, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]))
            .toBe(8)
    })
})
