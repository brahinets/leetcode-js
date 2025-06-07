# 3170. Lexicographically Minimum String After Removing Stars

## Medium

You are given a string `s`. It may contain any number of `*` characters. Your task is to remove all `*` characters.
While there is a `*`, do the following operation: Delete the leftmost `*` and the smallest non-`*` character to its
left. If there are several smallest characters, you can delete any of them. Return the lexicographically smallest
resulting string after removing all `*` characters.

### Constraints:

- `1 <= s.length <= 10^5`
- `s` consists only of lowercase English letters and `*`.
- The input is generated such that it is possible to delete all `*` characters.
