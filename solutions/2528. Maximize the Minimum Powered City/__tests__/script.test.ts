import {maxPower} from '../script'

describe('2528. Maximize the Minimum Powered City', (): void => {
    it('We can make', (): void => {
        expect(maxPower([1, 2, 4, 5, 0], 1, 2))
            .toBe(5)
    })

    it('We cannot make', (): void => {
        expect(maxPower([4, 4, 4, 4], 0, 3))
            .toBe(4)
    })
})
