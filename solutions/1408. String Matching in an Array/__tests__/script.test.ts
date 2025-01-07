import {stringMatching} from '../script'

describe('1408. String Matching in an Array', (): void => {
    it('One', (): void => {
        expect(stringMatching(["mass", "as", "hero", "superhero"]))
            .toEqual(["as", "hero"])
    })

    it('Two', (): void => {
        expect(stringMatching(["leetcode", "et", "code"]))
            .toEqual(["et", "code"])
    })


    it('No substrings', (): void => {
        expect(stringMatching(["blue", "green", "bu"]))
            .toEqual([])
    })
})
