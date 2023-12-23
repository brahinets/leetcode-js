import {isPathCrossing} from '../script'

describe('1496. Path Crossing', (): void => {

    it('Does not cross', (): void => {
        expect(isPathCrossing("NES"))
            .toBe(false)
    })

    it('Cross', (): void => {
        expect(isPathCrossing("NESWW"))
            .toBe(true)
    })
})
