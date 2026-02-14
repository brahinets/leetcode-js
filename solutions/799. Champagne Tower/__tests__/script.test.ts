import {champagneTower} from '../script'

describe('799. Champagne Tower', (): void => {

    it('One cup, top glass', (): void => {
        expect(champagneTower(1, 1, 1))
            .toBe(0)
    })

    it('Two cups, second row', (): void => {
        expect(champagneTower(2, 1, 1))
            .toBe(0.5)
    })

    it('Large pour, center glass full', (): void => {
        expect(champagneTower(1000000000, 99, 49))
            .toBe(1)
    })
})
