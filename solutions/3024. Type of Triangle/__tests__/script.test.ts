import {triangleType} from '../script'

describe('3024. Type of Triangle', (): void => {
    it('Equilateral', (): void => {
        expect(triangleType([3, 3, 3]))
            .toEqual("equilateral")
    })

    it('Scalene', (): void => {
        expect(triangleType([3, 4, 5]))
            .toEqual("scalene")
    })

    it('Isosceles', (): void => {
        expect(triangleType([7, 7, 4]))
            .toEqual("isosceles")
    })

    it('None', (): void => {
        expect(triangleType([7, 1, 8]))
            .toEqual("none")
    })
})
