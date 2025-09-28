import {largestPerimeter} from '../script'

describe('976. Largest Perimeter Triangle', (): void => {
    it('Big', (): void => {
        expect(largestPerimeter([2, 1, 2]))
            .toBe(5)
    })

    it('Zero', (): void => {
        expect(largestPerimeter([1, 2, 1, 10]))
            .toBe(0)
    })
})
