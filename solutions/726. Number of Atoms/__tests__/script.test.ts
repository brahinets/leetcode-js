import {countOfAtoms} from '../script'

describe('726. Number of Atoms', (): void => {
    it('Simple', (): void => {
        expect(countOfAtoms("H2O"))
            .toBe("H2O")
    })

    it('Inner', (): void => {
        expect(countOfAtoms("Mg(OH)2"))
            .toBe("H2MgO2")
    })

    it('Multi-inner', (): void => {
        expect(countOfAtoms("K4(ON(SO3)2)2"))
            .toBe("K4N2O14S4")
    })
})
