import {punishmentNumber} from '../script'

describe('2698. Find the Punishment Number of an Integer', (): void => {
    it('Zero', (): void => {
        expect(punishmentNumber(0))
            .toBe(0)
    })

    it('One', (): void => {
        expect(punishmentNumber(1))
            .toBe(1)
    })

    it('Three', (): void => {
        expect(punishmentNumber(10))
            .toBe(182)
    })

    it('Four', (): void => {
        expect(punishmentNumber(37))
            .toBe(1478)
    })
})
