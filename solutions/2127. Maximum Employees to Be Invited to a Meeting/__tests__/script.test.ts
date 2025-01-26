import {maximumInvitations} from '../script'

describe('2127. Maximum Employees to Be Invited to a Meeting', (): void => {
    it('All can sit, circular sit', (): void => {
        expect(maximumInvitations([1, 2, 0]))
            .toBe(3)
    })

    it('Some can sit because shared interest', (): void => {
        expect(maximumInvitations([2, 2, 1, 2]))
            .toBe(3)
    })

    it('Some can sit because place is occupied', (): void => {
        expect(maximumInvitations([3, 0, 1, 4, 1]))
            .toBe(4)
    })

    it('Only some can sit', (): void => {
        expect(maximumInvitations([1, 0, 0, 2, 1, 4, 7, 8, 9, 6, 7, 10, 8]))
            .toBe(6)
    })
})
