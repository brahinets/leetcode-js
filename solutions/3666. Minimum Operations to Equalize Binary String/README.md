# 3666. Minimum Operations to Equalize Binary String

## Medium

You are given a binary string `s` and a positive integer `k`.

In one operation, you choose exactly `k` distinct indices and flip each character at those indices (converting `'0'` to `'1'` and `'1'` to `'0'`).

Return the **minimum** number of operations needed to make all characters in the string equal to `'1'`. If it is impossible, return `-1`.

### Constraints:

- `1 <= s.length <= 10^5`
- `1 <= k <= s.length`
- `s` consists only of `'0'` and `'1'`
