import {finalValueAfterOperations} from '../script'

describe('2011. Final Value of Variable After Performing Operations', (): void => {
    it('Different operations', (): void => {
        expect(finalValueAfterOperations(["--X", "X++", "X++"]))
            .toBe(1)
    })

    it('Negative', (): void => {
        expect(finalValueAfterOperations(["--X"]))
            .toBe(-1)
    })

    it('Positive', (): void => {
        expect(finalValueAfterOperations(["++X", "++X", "X++"]))
            .toBe(3)
    })

    it('Zero', (): void => {
        expect(finalValueAfterOperations(["X++", "++X", "--X", "X--"]))
            .toBe(0)
    })
})
