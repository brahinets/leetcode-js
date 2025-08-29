import {flowerGame} from '../script'

describe('3021. Alice and Bob Playing Flower Game', (): void => {
    it('Example 1', (): void => {
        expect(flowerGame(3, 2))
            .toBe(3)
    })

    it('Example 2', (): void => {
        expect(flowerGame(1, 1))
            .toBe(0)
    })

    it('Small case', (): void => {
        expect(flowerGame(2, 3))
            .toBe(3)
    })

    it('Larger case', (): void => {
        expect(flowerGame(5, 4))
            .toBe(10)
    })

    it('Equal gardens', (): void => {
        expect(flowerGame(4, 4))
            .toBe(8)
    })
})
