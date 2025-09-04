import {findClosest} from '../script'

describe('3516. Find Closest Person', (): void => {
    it('First', (): void => {
        expect(findClosest(2, 7, 4))
            .toBe(1)
    })

    it('Second', (): void => {
        expect(findClosest(2, 5, 6))
            .toBe(2)
    })

    it('Same time', (): void => {
        expect(findClosest(1, 5, 3))
            .toBe(0)
    })
})
