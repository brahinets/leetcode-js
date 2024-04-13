import {knightDialer} from '../script'

describe('935. Knight Dialer', (): void => {

    it('Several', (): void => {
        expect(knightDialer(1))
            .toBe(10)
    })

    it('Many', (): void => {
        expect(knightDialer(2))
            .toBe(20)
    })

    it('Very big', (): void => {
        expect(knightDialer(3131))
            .toBe(136006598)
    })
})
