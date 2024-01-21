import {rob} from '../script'

describe('198. House Robber', (): void => {

    it('No houses', (): void => {
        expect(rob([]))
            .toBe(0)
    })

    it('One house', (): void => {
        expect(rob([1, 3]))
            .toBe(3)
    })

    it('Multiple houses', (): void => {
        expect(rob([2, 7, 9, 3, 1]))
            .toBe(12)
    })
})
