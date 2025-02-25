import {chalkReplacer} from '../script'

describe('1894. Find the Student that Will Replace the Chalk', (): void => {
    it('Full rotation', (): void => {
        expect(chalkReplacer([5, 1, 5], 22))
            .toEqual(0)
    })

    it('Sub-rotation', (): void => {
        expect(chalkReplacer([3, 4, 1, 2], 25))
            .toEqual(1)
    })
})
