import {findMatrix} from '../script'

describe('2610. Convert an Array Into a 2D Array With Conditions', (): void => {

    it('Several arrays', (): void => {
        expect(findMatrix([1, 3, 4, 1, 2, 3, 1]))
            .toEqual([[1, 3, 4, 2], [1, 3], [1]])
    })

    it('Only one array. All numbers are distinct', (): void => {
        expect(findMatrix([1, 2, 3, 4]))
            .toEqual([[1, 2, 3, 4]])
    })
})

