import {intersectionSizeTwo} from '../script'

describe('757. Set Intersection Size At Least Two', (): void => {
    it('Cannot be any containing array of size 4', (): void => {
        expect(intersectionSizeTwo([[1, 3], [3, 7], [8, 9]]))
            .toBe(5)
    })

    it('Cannot be any containing array of size 2', (): void => {
        expect(intersectionSizeTwo([[1, 3], [1, 4], [2, 5], [3, 5]]))
            .toBe(3)
    })

    it('Cannot be any containing array of size 4', (): void => {
        expect(intersectionSizeTwo([[1, 2], [2, 3], [2, 4], [4, 5]]))
            .toBe(5)
    })

    it('Cannot be any containing array of size 4 #2', (): void => {
        expect(intersectionSizeTwo([[1, 3], [3, 7], [5, 7], [7, 8]]))
            .toBe(5)
    })
})
