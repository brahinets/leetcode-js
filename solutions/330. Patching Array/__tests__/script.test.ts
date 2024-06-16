import {minPatches} from '../script'

describe('330. Patching Array', (): void => {

    it('No patches are needed', (): void => {
        expect(minPatches([1, 2, 2], 5))
            .toBe(0)
    })

    it('One patch enough', (): void => {
        expect(minPatches([1, 3], 6))
            .toBe(1)
    })

    it('Multiple patches is needed', (): void => {
        expect(minPatches([1, 5, 10], 20))
            .toBe(2)
    })
})
