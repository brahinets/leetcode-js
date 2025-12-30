import {pyramidTransition} from '../script'

describe('756. Pyramid Transition Matrix', (): void => {
    it('Possible', (): void => {
        expect(pyramidTransition("BCD", ["BCC", "CDE", "CEA", "FFF"]))
            .toBe(true)
    })

    it('Impossible', (): void => {
        expect(pyramidTransition("AAAA", ["AAB", "AAC", "BCD", "BBE", "DEF"]))
            .toBe(false)
    })
})
