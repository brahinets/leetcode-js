import { longestBalanced } from '../script'

describe('3714. Longest Balanced Substring II', (): void => {

    it('All same characters', (): void => {
        expect(longestBalanced('aaaa'))
            .toBe(4)
    })

    it('Several characters', (): void => {
        expect(longestBalanced('cbbac'))
            .toBe(3)
    })

    it('Two distinct chars equal frequency', (): void => {
        expect(longestBalanced('aabb'))
            .toBe(4)
    })

    it('Two distinct chars unequal frequency — longest is single-char run', (): void => {
        expect(longestBalanced('aaab'))
            .toBe(3)
    })

    it('Three distinct chars all equal frequency', (): void => {
        expect(longestBalanced('aabbcc'))
            .toBe(6)
    })

    it('Three distinct with unequal frequencies — best is two-char balanced', (): void => {
        expect(longestBalanced('aaabbc'))
            .toBe(4)
    })

    it('Single character', (): void => {
        expect(longestBalanced('a'))
            .toBe(1)
    })

    it('All distinct characters', (): void => {
        expect(longestBalanced('abcd'))
            .toBe(4)
    })

    it('Balanced substring spans full string', (): void => {
        expect(longestBalanced('aaabbbccc'))
            .toBe(9)
    })

    it('Mixed — best balanced is 3-char window', (): void => {
        expect(longestBalanced('aaabc'))
            .toBe(3)
    })

    it('Repeating two-char pattern', (): void => {
        expect(longestBalanced('ababab'))
            .toBe(6)
    })

    it('Balanced substring in the middle', (): void => {
        expect(longestBalanced('zaaabbz'))
            .toBe(4)
    })

    it('Large string all same char', (): void => {
        expect(longestBalanced('z'.repeat(100000)))
            .toBe(100000)
    })

    it('Load test', (): void => {
        expect(longestBalanced('cbaaacbaababcbbbaaacbbbccbabbabccbbbcabaccaccccbccababbcacacbcbbacbaabbaaccbacccbbaacbccccbaaccaabbcabaaaaccabaabbcbcbbbbabbbbccbacaabaaaabbccaccbcbbcacaccccabaacaacaacacabcccbbbcacabcbbacbaaaaacaaaaabccbbccaacacbbbcbabcbacacbabbcccaacaaaccbacaaacaaccbcabbacbabbbbaccbcbccccabccbccbaaaaaacacbabccbcbccaaabaccbcacbbbcbccabbbbaabcaabacccbcbccaccaccacabcaaaabcbbaacaabbabcbabaacbabccaaabacbbcbbcbcbbbbcacacbcbcccaacabbca'))
            .toBe(225)
    })
})
