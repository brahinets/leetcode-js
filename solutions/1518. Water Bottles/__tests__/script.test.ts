import {numWaterBottles} from '../script'

describe('1518. Water Bottles', (): void => {
    it('Exchange zero times', (): void => {
        expect(numWaterBottles(9, 10))
            .toBe(9)
    })

    it('Exchange one time', (): void => {
        expect(numWaterBottles(9, 3))
            .toBe(13)
    })

    it('Exchange multiple times #2', (): void => {
        expect(numWaterBottles(15, 4))
            .toBe(19)
    })
})
