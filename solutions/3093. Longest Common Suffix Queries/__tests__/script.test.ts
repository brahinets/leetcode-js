import {stringIndices} from '../script'

describe('3093. Longest Common Suffix Queries', (): void => {
    it('all queries match same shortest word', (): void => {
        expect(stringIndices(['abcd', 'bcd', 'xbcd'], ['cd', 'bcd', 'xyz']))
            .toEqual([1, 1, 1])
    })

    it('queries match different words by suffix length', (): void => {
        expect(stringIndices(['abcdefgh', 'poiuygh', 'ghghgh'], ['gh', 'acbfgh', 'acbfegh']))
            .toEqual([2, 0, 2])
    })

    it('no common suffix falls back to shortest word', (): void => {
        expect(stringIndices(['ab', 'cde', 'f'], ['xyz']))
            .toEqual([2])
    })

    it('exact match preferred over longer word', (): void => {
        expect(stringIndices(['abc', 'abc', 'xabc'], ['abc']))
            .toEqual([0])
    })

    it('single character words and queries', (): void => {
        expect(stringIndices(['a', 'b', 'c'], ['a', 'b', 'c']))
            .toEqual([0, 1, 2])
    })

    it('tie broken by earlier index when same length', (): void => {
        expect(stringIndices(['abc', 'xbc'], ['bc']))
            .toEqual([0])
    })

    it('longer suffix match wins over shorter word', (): void => {
        expect(stringIndices(['z', 'abcde'], ['bcde']))
            .toEqual([1])
    })

    it('single word in container', (): void => {
        expect(stringIndices(['hello'], ['hello', 'world', 'o']))
            .toEqual([0, 0, 0])
    })
})
