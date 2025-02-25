import {minimizedMaximum} from '../script'

describe('2064. Minimized Maximum of Products Distributed to Any Store', (): void => {
    it('Different maximums', (): void => {
        expect(minimizedMaximum(6, [11, 6]))
            .toBe(3)
    })

    it('The same maximums', (): void => {
        expect(minimizedMaximum(7, [15, 10, 10]))
            .toBe(5)
    })

    it('The only maximum', (): void => {
        expect(minimizedMaximum(1, [100000]))
            .toBe(100000)
    })
})
