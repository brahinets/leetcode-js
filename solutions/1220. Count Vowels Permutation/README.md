# 1220. Count Vowels Permutation

## Hard

Given an integer `n`, your task is to count how many strings of length `n` can be formed under the following rules:

- Each character is a lower case vowel (`a`, `e`, `i`, `o`, `u`)
- Each vowel `a` may only be followed by an `e`.
- Each vowel `e` may only be followed by an 'a' or an `i`.
- Each vowel `i` may not be followed by another `i`.
- Each vowel `o` may only be followed by an 'i' or a `u`.
- Each vowel `u` may only be followed by an `a`.

Since the answer may be too large, return it modulo `10^9 + 7`.

### Constraints:

- `1 <= n <= 2 * 10^4`
