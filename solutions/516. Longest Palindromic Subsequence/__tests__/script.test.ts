import {longestPalindromeSubseq} from '../script'

describe('516. Longest Palindromic Subsequence', (): void => {
    it('Keep as is', (): void => {
        expect(longestPalindromeSubseq("cbbd")).toBe(2)
    })

    it('Remove one char', (): void => {
        expect(longestPalindromeSubseq("bbd")).toBe(2)
    })

    it('Remove multiple chars', (): void => {
        expect(longestPalindromeSubseq("abcabcabcabc")).toBe(7)
    })

    it('Remove no chars', (): void => {
        expect(longestPalindromeSubseq("aaaaaaaaaaaaaaaaaaaaa")).toBe(21)
    })

    it('Very big string', (): void => {
        expect(longestPalindromeSubseq("euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew")).toBe(159)
    })
})
