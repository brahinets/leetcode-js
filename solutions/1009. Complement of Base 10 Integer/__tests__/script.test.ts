import {bitwiseComplement} from '../script'

describe('1009. Complement of Base 10 Integer', (): void => {
    it('To zero', (): void => {
        expect(bitwiseComplement(7))
            .toEqual(0)
    })

    it('To another integer same length', (): void => {
        expect(bitwiseComplement(5))
            .toEqual(2)
    })

    it('To another integer different length', (): void => {
        expect(bitwiseComplement(10))
            .toEqual(5)
    })
})
