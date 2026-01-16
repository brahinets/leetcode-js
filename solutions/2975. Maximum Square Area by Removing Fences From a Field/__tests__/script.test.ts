import {maximizeSquareArea} from '../script'

describe('2975. Maximum Square Area by Removing Fences From a Field', (): void => {
    it('Multiple ways to create a square', (): void => {
        expect(maximizeSquareArea(4, 3, [2, 3], [2]))
            .toBe(4)
    })

    it('No way to create a square', (): void => {
        expect(maximizeSquareArea(6, 7, [2], [4]))
            .toBe(-1)
    })
})
