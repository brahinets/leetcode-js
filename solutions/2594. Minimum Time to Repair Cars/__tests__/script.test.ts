import {repairCars} from '../script'

describe('2594. Minimum Time to Repair Cars', (): void => {
    it('One', (): void => {
        expect(repairCars([4, 2, 3, 1], 10))
            .toBe(16)
    })

    it('Two', (): void => {
        expect(repairCars([5, 1, 8], 6))
            .toBe(16)
    })
})
