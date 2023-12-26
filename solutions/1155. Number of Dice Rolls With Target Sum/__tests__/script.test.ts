import {numRollsToTarget} from '../script'

describe('1155. Number of Dice Rolls With Target Sum', (): void => {

    it('One way', (): void => {
        expect(numRollsToTarget(1, 6, 3))
            .toBe(1)
    })

    it('Several ways', (): void => {
        expect(numRollsToTarget(2, 6, 7))
            .toBe(6)
    })

    it('Many ways (by modulo)', (): void => {
        expect(numRollsToTarget(30, 30, 500))
            .toBe(222616187)
    })
})
