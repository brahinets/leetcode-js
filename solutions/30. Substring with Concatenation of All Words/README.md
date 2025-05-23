# 30. Substring with Concatenation of All Words

## Hard

You are given a string `s` and an array of strings `words`. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if `words = ["ab","cd","ef"]`, then `abcdef`, `abefcd`, `cdabef`, `cdefab`, `efabcd`, and `efcdab` are all
concatenated strings. `acdbef` is not a concatenated string because it is not the concatenation of any permutation of
words.
Return an array of the starting indices of all the concatenated substrings in `s`. You can return the answer in any
order.

### Constraints:

- `1 <= s.length <= 10^4`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 30`
- `s` and `words[i]` consist of lowercase English letters.
