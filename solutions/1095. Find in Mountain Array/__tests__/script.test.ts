import {findInMountainArray, MountainArray} from '../script'

describe('1095. Find in Mountain Array', (): void => {
    it('Exist', (): void => {
        expect(findInMountainArray(3, new MountainArray([1, 2, 3, 4, 5, 3, 1])))
            .toEqual(2)
    })

    it('Does not exist', (): void => {
        expect(findInMountainArray(3, new MountainArray([0, 1, 2, 4, 2, 1])))
            .toEqual(-1)
    })
})

