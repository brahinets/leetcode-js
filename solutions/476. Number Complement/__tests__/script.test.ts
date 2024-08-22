import {findComplement} from '../script'

describe('476. Number Complement', (): void => {
    it('To zero', (): void => {
        expect(findComplement(1))
            .toEqual(0)
    })

    it('To another integer', (): void => {
        expect(findComplement(5))
            .toEqual(2)
    })
})
