# 3720. Lexicographically Smallest Permutation Greater Than Target

## Medium

You are given two strings `s` and `target`, both having length `n`, consisting of lowercase English letters.

Return the lexicographically smallest **permutation** of `s` that is **strictly** greater than `target`. If no
permutation of `s` is lexicographically strictly greater than `target`, return an empty string.

A string `a` is lexicographically **strictly greater** than a string `b` (of the same length) if in the first
position where `a` and `b` differ, string `a` has a letter that appears later in the alphabet than the
corresponding letter in `b`.

### Constraints:

- `1 <= s.length == target.length <= 300`
- `s` and `target` consist of only lowercase English letters.
