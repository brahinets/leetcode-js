import {makeEqual} from '../script'

describe('1897. Redistribute Characters to Make All Strings Equal', (): void => {

    it('Possible', (): void => {
        expect(makeEqual(["abc", "aabc", "bc"]))
            .toBe(true)
    })

    it('Impossible', (): void => {
        expect(makeEqual(["ab", "a"]))
            .toBe(false)
    })
})
