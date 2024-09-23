import {minExtraChar} from '../script'

describe('2707. Extra Characters in a String', (): void => {
    it('One', (): void => {
        expect(minExtraChar("leetscode", ["leet", "code", "leetcode"]))
            .toBe(1)
    })

    it('Two', (): void => {
        expect(minExtraChar("sayhelloworld", ["hello", "world"]))
            .toBe(3)
    })
})
