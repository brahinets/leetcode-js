import {sumZero} from '../script'

describe('1304. Find N Unique Integers Sum up to Zero', (): void => {
    it('Complex odd', (): void => {
        expect(sumZero(5))
            .toEqual([1, -1, 2, -2, 0])
    })

    it('Complex even', (): void => {
        expect(sumZero(4))
            .toEqual([1, -1, 2, -2])
    })

    it('Simple', (): void => {
        expect(sumZero(3))
            .toEqual([1, -1, 0])
    })

    it('The only', (): void => {
        expect(sumZero(1))
            .toEqual([0])
    })
})
