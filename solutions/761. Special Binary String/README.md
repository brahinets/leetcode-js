# 761. Special Binary String

## Hard

A special binary string is a binary string with the following two properties:

- The number of `0`'s is equal to the number of `1`'s.
- Every prefix of the binary string has at least as many `1`'s as `0`'s.

You are given a special binary string `s`. A move consists of choosing two consecutive, non-empty, special binary substrings of `s`, and swapping them.

Return the lexicographically largest resulting string possible after applying the above mentioned operations any number of times on `s`.

### Constraints:

- `1 <= s.length <= 50`
- `s[i]` is either `'0'` or `'1'`
- `s` is a special binary string
