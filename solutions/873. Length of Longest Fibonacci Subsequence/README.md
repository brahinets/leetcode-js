# 873. Length of Longest Fibonacci Subsequence

## Medium

A sequence `x1, x2, ..., xn` is Fibonacci-like if:

- `n >= 3`
- `xi + xi+1 == xi+2 for all i + 2 <= n`

Given a strictly increasing array `arr` of positive integers forming a sequence, return the length of the longest
Fibonacci-like subsequence of `arr`. If one does not exist, return 0. A subsequence is derived from another sequence
`arr` by deleting any number of elements (including none) from `arr`, without changing the order of the remaining
elements. For example, `[3, 5, 8]` is a subsequence of `[3, 4, 5, 6, 7, 8]`.

### Constraints:

- `3 <= arr.length <= 1000`
- `1 <= arr[i] < arr[i + 1] <= 10^9`
