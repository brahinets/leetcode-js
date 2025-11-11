import {findMaxForm} from '../script'

describe('474. Ones and Zeroes', (): void => {
    it('One', (): void => {
        expect(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))
            .toBe(4)
    })

    it('Two', (): void => {
        expect(findMaxForm(["10", "0", "1"], 1, 1))
            .toBe(2)
    })
})
