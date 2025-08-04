import {totalFruit} from '../script'

describe('904. Fruit Into Baskets', (): void => {
    it('We can pick from all 3 trees', (): void => {
        expect(totalFruit([1, 2, 1]))
            .toBe(3)
    })

    it('We can pick from last trees', (): void => {
        expect(totalFruit([0, 1, 2, 2]))
            .toBe(3)
    })

    it('We can pick from last tree too', (): void => {
        expect(totalFruit([1, 2, 3, 2, 2]))
            .toBe(4)
    })
})
