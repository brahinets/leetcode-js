import {minimizeXor} from '../script'

describe('2429. Minimize XOR', (): void => {
    it('One', (): void => {
        expect(minimizeXor(3, 5))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(minimizeXor(1, 12))
            .toBe(3)
    })
})
