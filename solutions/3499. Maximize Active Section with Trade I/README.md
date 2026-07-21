# 3499. Maximize Active Section with Trade I

## Medium

You're given a binary string `s` where `'1'` represents an active section and `'0'` represents an inactive section. You may perform at most one trade to maximize active sections:

- Convert a contiguous block of `'1'`s surrounded by `'0'`s to all `'0'`s
- Then convert a contiguous block of `'0'`s surrounded by `'1'`s to all `'1'`s

The string is treated as augmented with `'1'` at both ends (these don't count toward the final answer).

## Constraints

- `1 <= n == s.length <= 10^5`
- Each character is either `'0'` or `'1'`
