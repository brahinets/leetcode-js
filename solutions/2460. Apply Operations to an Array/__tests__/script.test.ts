import {applyOperations} from '../script'

describe('2460. Apply Operations to an Array', (): void => {
    it('Multiple Operations. Shift', (): void => {
        expect(applyOperations([1, 2, 2, 1, 1, 0]))
            .toEqual([1, 4, 2, 0, 0, 0])
    })

    it('No operations. Just shift', (): void => {
        expect(applyOperations([0, 1]))
            .toEqual([1, 0])
    })

    it('Three', (): void => {
        expect(applyOperations([1, 0]))
            .toEqual([1, 0])
    })
})
