import {maximumBeauty} from '../script'

describe('2779. Maximum Beauty of an Array After Applying Operation', (): void => {
    it('Have to apply any operations', (): void => {
        expect(maximumBeauty([4, 6, 1, 2], 2))
            .toBe(3)
    })

    it('Don\'t have to apply any operations', (): void => {
        expect(maximumBeauty([1, 1, 1, 1], 10))
            .toBe(4)
    })
})
