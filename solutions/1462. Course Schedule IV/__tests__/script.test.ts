import {checkIfPrerequisite} from '../script'

describe('1462. Course Schedule IV', (): void => {
    it('Can complete some', (): void => {
        expect(checkIfPrerequisite(2, [[1, 0]], [[0, 1], [1, 0]]))
            .toEqual([false, true])
    })

    it('Can complete nothing', (): void => {
        expect(checkIfPrerequisite(2, [], [[1, 0], [0, 1]]))
            .toEqual([false, false])
    })

    it('Can complete all', (): void => {
        expect(checkIfPrerequisite(3, [[1, 2], [1, 0], [2, 0]], [[1, 0], [1, 2]]))
            .toEqual([true, true])
    })
})
