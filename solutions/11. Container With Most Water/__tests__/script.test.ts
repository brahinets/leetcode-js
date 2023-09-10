import {maxArea} from '../script'

describe('11. Container With Most Water', (): void => {

    it('Small', (): void => {
        expect(maxArea([1, 1]))
            .toStrictEqual(1)
    })

    it('Medium', (): void => {
        expect(maxArea([3, 1, 2, 4, 5]))
            .toStrictEqual(12)
    })

    it('Big', (): void => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
            .toStrictEqual(49)
    })
})
