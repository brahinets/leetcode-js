import {countCharacters} from '../script'

describe('1160. Find Words That Can Be Formed by Characters', (): void => {
    it('No words', (): void => {
        expect(countCharacters([], ""))
            .toBe(0)
    })

    it('Multiple words', (): void => {
        expect(countCharacters(["cat", "bt", "hat", "tree"], "atach"))
            .toBe(6)
    })

    it('Many words', (): void => {
        expect(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"))
            .toBe(10)
    })
})
