import {minEnd} from '../script'

describe('3133. Minimum Array End', (): void => {
    it('One', (): void => {
        expect(minEnd(3, 4))
            .toBe(6)
    })

    it('Two', (): void => {
        expect(minEnd(2, 7))
            .toBe(15)
    })

    it('Big', (): void => {
        expect(minEnd(6715154, 7193485))
            .toBe(55012476815)
    })
})
