# 3302. Find the Lexicographically Smallest Valid Sequence

## Medium

You are given two strings `word1` and `word2`.

A string `x` is called **almost equal** to `y` if you can change at most one character in `x` to make it identical to `y`.

A sequence of indices `sequence` is called **valid** if:

- The indices are sorted in ascending order.
- Concatenating the characters at these indices in `word1` in the same order results in a string that is almost equal to `word2`.

Return an array of size `word2.length` representing the lexicographically smallest **valid** sequence of indices. If no such sequence of indices exists, return an empty array.

### Constraints:

- `1 <= word2.length < word1.length <= 3 * 10^5`
- `word1` and `word2` consist only of lowercase English letters.
