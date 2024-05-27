import {specialArray} from '../script'

describe('1608. Special Array With X Elements Greater Than or Equal X', (): void => {
    it('Not special', (): void => {
        expect(specialArray([0, 0]))
            .toBe(-1)
    })

    it('Exact delta x', (): void => {
        expect(specialArray([3, 5]))
            .toBe(2)
    })

    it('Different delta x', (): void => {
        expect(specialArray([0, 4, 3, 0, 4]))
            .toBe(3)
    })
})
