import {kLengthApart} from '../script'

describe('1437. Check If All 1\'s Are at Least Length K Places Away', (): void => {
    it('All 1\'s Are at Least Length K Places Away', (): void => {
        expect(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2))
            .toBe(true)
    })

    it('Some 1\'s Are not at Least Length K Places Away', (): void => {
        expect(kLengthApart([1, 0, 0, 1, 0, 1], 2))
            .toBe(false)
    })
})
