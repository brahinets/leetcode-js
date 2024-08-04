import {findArray} from '../script'

describe('2433. Find The Original Array of Prefix Xor', (): void => {

    it('Big array', (): void => {
        expect(findArray([5, 2, 0, 3, 1]))
            .toStrictEqual([5, 7, 2, 3, 2])
    })

    it('Small array', (): void => {
        expect(findArray([13]))
            .toStrictEqual([13])
    })
})
