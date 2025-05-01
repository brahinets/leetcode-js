import {maxTaskAssign} from '../script'

describe('2071. Maximum Number of Tasks You Can Assign', (): void => {
    it('Handle all', (): void => {
        expect(maxTaskAssign([3, 2, 1], [0, 3, 3], 1, 1))
            .toBe(3)
    })

    it('Handle only one', (): void => {
        expect(maxTaskAssign([5, 4], [0, 0, 0], 1, 5))
            .toBe(1)
    })

    it('Handle many', (): void => {
        expect(maxTaskAssign([10, 15, 30], [0, 10, 10, 10, 10], 3, 10))
            .toBe(2)
    })
})
