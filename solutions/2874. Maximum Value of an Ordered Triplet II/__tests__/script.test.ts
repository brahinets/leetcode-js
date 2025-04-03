import {maximumTripletValue} from '../script'

describe('2874. Maximum Value of an Ordered Triplet II', (): void => {
    it('One', (): void => {
        expect(maximumTripletValue([12, 6, 1, 2, 7]))
            .toBe(77)
    })

    it('Two', (): void => {
        expect(maximumTripletValue([1, 10, 3, 4, 19]))
            .toBe(133)
    })

    it('Three', (): void => {
        expect(maximumTripletValue([1, 2, 3]))
            .toBe(0)
    })
})
