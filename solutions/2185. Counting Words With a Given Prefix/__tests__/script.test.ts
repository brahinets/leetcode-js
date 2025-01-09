import {prefixCount} from '../script'

describe('2185. Counting Words With a Given Prefix', (): void => {
    it('Multiple words with such prefix', (): void => {
        expect(prefixCount(["pay", "attention", "practice", "attend"], "at"))
            .toBe(2)
    })

    it('No words with such prefix', (): void => {
        expect(prefixCount(["leetcode", "win", "loops", "success"], "code"))
            .toBe(0)
    })
})
