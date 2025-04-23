import {countLargestGroup} from '../script'

describe('1399. Count Largest Group', (): void => {
    it('Manu groups', (): void => {
        expect(countLargestGroup(13))
            .toBe(4)
    })

    it('Two groups', (): void => {
        expect(countLargestGroup(2))
            .toBe(2)
    })

    it('The only group', (): void => {
        expect(countLargestGroup(1))
            .toBe(1)
    })
})
