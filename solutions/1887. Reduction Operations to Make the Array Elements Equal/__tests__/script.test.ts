import {reductionOperations} from '../script'

describe('1887. Reduction Operations to Make the Array Elements Equal', (): void => {
    it('Already equal', (): void => {
        expect(reductionOperations([1, 1, 1]))
            .toBe(0)
    })

    it('Few different', (): void => {
        expect(reductionOperations([5, 1, 3]))
            .toBe(3)
    })

    it('Multiple different', (): void => {
        expect(reductionOperations([1, 1, 2, 2, 3]))
            .toBe(4)
    })
})
