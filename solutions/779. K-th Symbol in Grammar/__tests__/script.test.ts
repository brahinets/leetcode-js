import {kthGrammar} from "../script"

describe('779. K-th Symbol in Grammar', (): void => {

    it('One-level tree', (): void => {
        expect(kthGrammar(1, 1))
            .toBe(0)
    })

    it('Two-leve tree left', (): void => {
        expect(kthGrammar(2, 1))
            .toBe(0)
    })

    it('Two-level tree right', (): void => {
        expect(kthGrammar(2, 2))
            .toBe(1)
    })

    it('Multi-level tree', (): void => {
        expect(kthGrammar(3, 3))
            .toBe(1)
    })
})
