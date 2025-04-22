# 2338. Count the Number of Ideal Arrays

## Hard

You are given two integers `n` and `maxValue`, which are used to describe an ideal array. A 0-indexed integer array
`arr` of length `n` is considered ideal if the following conditions hold:

- Every `arr[i]` is a value from `1` to `maxValue`, for `0 <= i < n`.
- Every `arr[i]` is divisible by `arr[i - 1]`, for `0 < i < n`.

Return the number of distinct ideal arrays of length `n`. Since the answer may be very large, return it modulo
`10^9 + 7`.

### Constraints:

- `2 <= n <= 10^4`
- `1 <= maxValue <= 10^4`
